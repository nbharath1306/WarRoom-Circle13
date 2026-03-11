import fs from 'fs';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function fetch10Times() {
    console.log("Fetching 10times BLR Tech...");
    const url = 'https://10times.com/bangalore/technology';
    const res = await fetch(url, {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    });
    const html = await res.text();
    fs.writeFileSync('10times.html', html);
    console.log("Saved 10times.html, length:", html.length);
    
    const $ = cheerio.load(html);
    const events = [];
    
    // Let's just find anything that looks like an event link
    $('a').each((i, el) => {
        const href = $(el).attr('href');
        if (href && href.includes('10times.com/') && !href.includes('/bangalore') && !href.includes('/technology')) {
             // might be an event
             const title = $(el).text().trim();
             if (title.length > 10 && title.length < 100) {
                 events.push({ title, url: href });
             }
        }
    });
    console.log("Found possible event links:");
    console.log(events.slice(0, 10));
}
fetch10Times();
