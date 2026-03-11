import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function scrapeDevEvents() {
    console.log("Fetching Dev.events India...");
    try {
        const url = 'https://dev.events/IN';
        const res = await fetch(url, {
            headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
            }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const events = [];
        $('.event').each((i, el) => {
             const title = $(el).find('h3').text().trim() || $(el).find('.title').text().trim() || $(el).text().trim();
             const loc = $(el).find('.location').text().trim() || $(el).text().trim();
             
             if (loc.toLowerCase().includes('bangalore') || loc.toLowerCase().includes('bengaluru')) {
                  events.push({
                      title: title.substring(0, 100).replace(/\n/g, ' '),
                      location: 'BANGALORE, IN'
                  });
             }
        });
        console.log(`Found ${events.length} BLR events. ${events.slice(0,2)}`);
    } catch(e) {
        console.error(e);
    }
}
scrapeDevEvents();
