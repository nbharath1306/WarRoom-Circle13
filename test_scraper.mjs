import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function testSearchScraper() {
    console.log("Searching DuckDuckGo for Luma events...");
    try {
        const query = 'site:lu.ma tech meetup ai data';
        const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
        
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const events = [];
        $('.result').each((i, el) => {
            if (i >= 5) return;
            const title = $(el).find('.result__title').text().trim();
            const snippet = $(el).find('.result__snippet').text().trim();
            const lumaUrlMatch = $(el).find('.result__url').text().trim();
            
            // Clean up titles like "AI DevCon - Luma" -> "AI DevCon"
            let cleanTitle = title.replace(' - Luma', '').replace(' · Luma', '');
            
            if (cleanTitle && lumaUrlMatch.includes('lu.ma')) {
                events.push({
                    title: cleanTitle,
                    description: snippet,
                    url: 'https://' + lumaUrlMatch.replace(/\s/g, '')
                });
            }
        });
        
        console.log(`Found ${events.length} real events via DDG.`);
        console.log(events);
    } catch (e) {
        console.error(e);
    }
}
testSearchScraper();
