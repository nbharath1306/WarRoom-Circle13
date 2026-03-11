import fs from 'fs';
import fetch from 'node-fetch';

async function extractCityAPI() {
    console.log("Fetching lu.ma/blr HTML to find the hidden Calendar API ID...");
    const htmlRes = await fetch('https://lu.ma/blr', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    });
    const html = await htmlRes.text();
    const match = html.match(/<script id="__NEXT_DATA__".*?>(.*?)<\/script>/);
    
    if (match) {
        const data = JSON.parse(match[1]);
        const initialData = data.props?.pageProps?.initialData || {};
        
        // Find the "calendar_api_id" or "geo_id" or "place_api_id"
        let calendarId = null;
        let placeId = null;
        const findId = (obj) => {
            if (!obj || typeof obj !== 'object') return;
            if (obj.calendar && obj.calendar.api_id && obj.calendar.name) {
                calendarId = obj.calendar.api_id;
                console.log("Found Calendar:", obj.calendar.name, calendarId);
            }
            if (obj.geo_place && obj.geo_place.api_id) {
                placeId = obj.geo_place.api_id;
                console.log("Found Place ID:", obj.geo_place.name, placeId);
            }
            if (obj.api_id && obj.api_id.startsWith('cal-')) {
                 calendarId = obj.api_id;
            }
            if (Array.isArray(obj)) {
                for (let o of obj) findId(o);
            } else {
                for (let k in obj) findId(obj[k]);
            }
        };
        findId(initialData);

        console.log("Extracted IDs -> Calendar:", calendarId, "Place:", placeId);

        // Try hitting Luma's internal API for discovery
        // Luma uses https://api.lu.ma/discover/get-paginated-events or similar. 
        // Let's try to query the public API if we found the place ID.
        if (calendarId) {
            console.log("Attempting to fetch full calendar feed...");
            const calRes = await fetch(`https://api.lu.ma/calendar/get-items?calendar_api_id=${calendarId}&period=future`, {
                headers: { 'User-Agent': 'Mozilla/5.0' }
            });
            console.log("Cal Status:", calRes.status);
            if (calRes.status === 200) {
                 const calJson = await calRes.json();
                 console.log(`Found ${calJson.entries?.length || 0} entries in calendar API.`);
            } else {
                 console.log(await calRes.text());
            }
        }

        // Luma also has a discover API: POST https://api.lu.ma/discover/get-paginated-events
        // Let's try this with the place_api_id
        console.log("Attempting discover API...");
        try {
            const discRes = await fetch('https://api.lu.ma/discover/get-events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'User-Agent': 'Mozilla/5.0'
                },
                body: JSON.stringify({
                    pagination_limit: 50,
                    geo_place_ids: placeId ? [placeId] : ["place-9DDEy4oXmBmbw1k"], // Usually BLR is this ID or we will extract it
                    category: "tech" // try to filter by tech
                })
            });
            console.log("Discover Status:", discRes.status);
            if (discRes.status === 200) {
                 const discJson = await discRes.json();
                 console.log(`Found ${discJson.entries?.length || 0} entries in discover API.`);
                 if (discJson.entries && discJson.entries.length > 0) {
                     console.log(discJson.entries[0].event.name);
                 }
            } else {
                 console.log(await discRes.text());
            }
        } catch(e) {}
    }
}
extractCityAPI();
