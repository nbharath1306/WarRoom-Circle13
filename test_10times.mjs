import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function test10TimesScraper() {
    console.log("Scraping 10times for Bangalore Tech Events...");
    try {
        const url = 'https://10times.com/bangalore/technology';
        const res = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });
        
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const events = [];
        
        // 10times usually stores events in <tr> or elements with class 'event-card' or 'row'
        $('tr.row').each((i, el) => {
            if (i >= 5) return;
            const titleElement = $(el).find('h2 a');
            const title = titleElement.text().trim();
            const link = titleElement.attr('href');
            // get date
            const date = $(el).find('.text-primary').text().trim() || $(el).find('.text-muted').text().trim();
            // get location
            const loc = $(el).find('.text-muted.mb-0').text().trim() || 'Bangalore, India';

            if (title) {
                events.push({
                    title: title,
                    url: link,
                    date: date,
                    location: loc
                });
            }
        });
        
        console.log(`Found ${events.length} real events.`);
        console.log(events);
    } catch (e) {
        console.error(e);
    }
}
test10TimesScraper();
