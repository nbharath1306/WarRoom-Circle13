import { search, SafeSearchType } from 'duck-duck-scrape';

async function testDDG() {
    try {
        console.log("Initializing DDG scrape for Bangalore Luma events...");
        
        // Search specifically for Bangalore events on Luma
        const res = await search('site:lu.ma/event "tech" OR "AI" OR "founders" "Bangalore"', {
             safeSearch: SafeSearchType.MODERATE
        });
        
        console.log(`Found ${res.results.length} results.`);
        for (const item of res.results.slice(0, 5)) {
             console.log(item.title);
             console.log(item.url);
        }
    } catch(e) {
        console.error("DDG Error:", e);
    }
}
testDDG();
