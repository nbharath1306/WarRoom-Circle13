import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function testAllEvents() {
    console.log("Fetching AllEvents.in Bangalore Tech...");
    try {
        const url = 'https://allevents.in/bangalore/tech';
        const res = await fetch(url, {
            headers: {
                 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const events = [];
        $('.event-card').each((i, el) => {
             // Let's get up to 20 events
             if (events.length >= 20) return; 
             
             // AllEvents uses an <a> tag for the wrapper
             let eventUrl = $(el).attr('href') || $(el).attr('data-link');
             if (eventUrl && !eventUrl.startsWith('http')) eventUrl = 'https://allevents.in' + eventUrl;
             
             let title = $(el).find('h3').attr('title') || $(el).find('h3').text().trim();
             let time = $(el).find('.date').text().trim() || $(el).find('.date-part').text().trim();
             let venue = $(el).find('.subtitle').text().trim();
             
             if (title && eventUrl && !events.find(e => e.title === title)) {
                  events.push({
                      title: title,
                      url: eventUrl,
                      time: time || 'Future',
                      location: venue || 'Bangalore, IN'
                  });
             }
        });
        
        console.log(`Intercepted ${events.length} Bangalore Tech Events!`);
        console.log(events.slice(0, 5));
    } catch(e) {
        console.error(e);
    }
}
testAllEvents();
