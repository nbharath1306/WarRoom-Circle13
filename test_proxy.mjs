import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function testAllOrigins() {
    console.log("Testing AllOrigins Proxy to bypass DDG IP blocks...");
    try {
        const targetUrl = 'https://html.duckduckgo.com/html/?q=site:lu.ma/event+"Bangalore"+"tech"';
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(targetUrl)}`;
        
        const res = await fetch(proxyUrl);
        const json = await res.json();
        
        if (json.contents) {
             const $ = cheerio.load(json.contents);
             const events = [];
             $('.result').each((i, el) => {
                 if (i >= 15) return;
                 const title = $(el).find('.result__title').text().trim();
                 const snippet = $(el).find('.result__snippet').text().trim();
                 const urlMatch = $(el).find('.result__url').attr('href');
                 
                 let cleanTitle = title.replace(' - Luma', '').replace(' · Luma', '');
                 if (cleanTitle && urlMatch && urlMatch.includes('lu.ma')) {
                     events.push({ title: cleanTitle, snippet, url: urlMatch });
                 }
             });
             console.log(`Successfully bypassed DDG! Intercepted ${events.length} Luma Nodes.`);
             if (events.length > 0) {
                 console.log(events.slice(0, 3));
             }
        } else {
             console.log("Failed to get contents from AllOrigins");
        }
    } catch(e) {
        console.error(e);
    }
}
testAllOrigins();
