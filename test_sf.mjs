import fs from 'fs';
import fetch from 'node-fetch';

async function testFetch() {
    console.log("Fetching Luma /sf...");
    try {
        const res = await fetch('https://lu.ma/sf', {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'
            }
        });
        const html = await res.text();
        const match = html.match(/<script id="__NEXT_DATA__".*?>(.*?)<\/script>/);
        const events = [];
        if (match) {
            const data = JSON.parse(match[1]);
            const initialData = data.props?.pageProps?.initialData || {};
            
            const results = [];
            const searchForEvents = (obj) => {
                if (!obj || typeof obj !== 'object') return;
                if (obj.api_id && obj.api_id.startsWith('evt-') && obj.name) {
                    results.push(obj);
                    return;
                }
                if (obj.event && obj.event.api_id && obj.event.name) {
                    results.push(obj.event);
                    return;
                }
                if (Array.isArray(obj)) {
                    for (let o of obj) searchForEvents(o);
                } else {
                    for (let k in obj) searchForEvents(obj[k]);
                }
            };
            searchForEvents(initialData);
            
            const uniqueEvents = {};
            for (let e of results) {
                uniqueEvents[e.api_id] = e;
            }
            const finalEvents = Object.values(uniqueEvents);
            console.log("Found SF unique events:", finalEvents.length);
            finalEvents.forEach(e => console.log(e.name));
        } else {
            console.log("No NEXT DATA");
        }
    } catch (e) {
        console.error(e);
    }
}
testFetch();
