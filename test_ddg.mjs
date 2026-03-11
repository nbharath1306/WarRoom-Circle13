import { search } from 'duck-duck-scrape';

async function testDDG() {
    try {
        console.log("Initializing DuckDuckGo headless scrape for Luma events...");
        const searchResults = await search('site:lu.ma/event "tech" OR "AI" OR "meetup"', {
            safeSearch: "off" // avoid strict filtering dropping new URLs
        });
        
        const events = [];
        for (const res of searchResults.results) {
            // Usually res.title and res.url
            if (res.url && res.url.includes('lu.ma/event') || res.url.includes('lu.ma/')) {
                let cleanTitle = res.title.replace(/ · Luma/ig, '').replace(/ - Luma/ig, '').trim();
                events.push({
                    title: cleanTitle,
                    description: res.description,
                    url: res.url
                });
            }
        }
        console.log(`Intercepted ${events.length} Luma Nodes:`);
        console.log(events.slice(0, 5));
    } catch (e) {
        console.error("DDG Error:", e);
    }
}
testDDG();
