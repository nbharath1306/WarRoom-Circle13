import * as cheerio from 'cheerio';

export interface DiscoveredEvent {
  title: string;
  description?: string;
  source: 'luma' | 'eventbrite' | 'meetup' | 'devpost' | 'mlh' | 'manual';
  source_id?: string;
  source_url: string;
  start_time: Date;
  end_time?: Date;
  location?: string;
  cover_image_url?: string;
  tags?: string[];
  metadata?: any;
}

export async function scrapeDevpost(): Promise<DiscoveredEvent[]> {
  const url = 'https://devpost.com/hackathons';
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  
  const events: DiscoveredEvent[] = [];
  
  $('.hackathon-tile').each((_, element) => {
    const title = $(element).find('.title').text().trim();
    const source_url = $(element).find('a').attr('href') || '';
    const dateText = $(element).find('.date-range').text().trim();
    const location = $(element).find('.location').text().trim();
    const imgUrl = $(element).find('img').attr('src');

    // Basic date parsing (highly simplified for now)
    // Devpost dates usually look like "Mar 15 – 17, 2026"
    const start_time = new Date(); // Placeholder for actual parsing logic

    if (title && source_url) {
      events.push({
        title,
        source: 'devpost',
        source_url,
        start_time,
        location,
        cover_image_url: imgUrl,
        tags: ['hackathon'],
      });
    }
  });

  return events;
}
