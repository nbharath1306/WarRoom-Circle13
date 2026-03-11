import fs from 'fs';

let html = fs.readFileSync('luma.html', 'utf8');
let match = html.match(/<script id="__NEXT_DATA__".*?>(.*?)<\/script>/);
if (match) {
    let data = JSON.parse(match[1]);
    let initialData = data.props?.pageProps?.initialData || {};
    let events = initialData.data?.newEvents?.entries || initialData.data?.events?.entries || initialData.data?.topEvents?.entries || [];
    
    // Look deeper if not at top level
    if (events.length === 0) {
        // Just search the whole object for "event": { "name": ... }
        const searchForEvents = (obj, results) => {
            if (!obj || typeof obj !== 'object') return;
            // Does this look like an event object?
            if (obj.api_id && obj.api_id.startsWith('evt-') && obj.name) {
                results.push(obj);
                return;
            }
            // Luma's new API structure uses 'event' wrapped inside 'entry'
            if (obj.event && obj.event.api_id && obj.event.name) {
                results.push(obj.event);
                return;
            }
            if (Array.isArray(obj)) {
                for (let o of obj) searchForEvents(o, results);
            } else {
                for (let k in obj) {
                    searchForEvents(obj[k], results);
                }
            }
        };
        let found = [];
        searchForEvents(initialData, found);
        events = found;
    }
    
    console.log("Found events:", events.length);
    if (events.length > 0) {
        console.log("First event:", events[0].name, "| link: lu.ma/" + events[0].url, "| time:", events[0].start_at);
        // sample second event
        console.log("Second event:", events[1]?.name);
    }
}
