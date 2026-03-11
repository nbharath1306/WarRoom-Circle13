import { DiscoveredEvent } from './scanners';

const LUMA_API_URL = 'https://public-api.luma.com/v1';

export async function fetchLumaEvents(apiKey: string): Promise<DiscoveredEvent[]> {
  const response = await fetch(`${LUMA_API_URL}/event/get-all`, {
    headers: {
      'x-luma-api-key': apiKey,
    },
  });

  if (!response.ok) {
    throw new Error(`Luma API error: ${response.statusText}`);
  }

  const data = await response.json();
  
  return data.entries.map((entry: any) => ({
    title: entry.event.name,
    description: entry.event.description,
    source: 'luma',
    source_id: entry.event.api_id,
    source_url: `https://lu.ma/${entry.event.url_slug}`,
    start_time: new Date(entry.event.start_at),
    end_time: new Date(entry.event.end_at),
    location: entry.event.geo_address_json?.full_address || 'Online',
    cover_image_url: entry.event.cover_url,
    tags: entry.event.tags || [],
    metadata: entry,
  }));
}

export async function registerForLumaEvent(apiKey: string, eventId: string, email: string, name: string) {
  const response = await fetch(`${LUMA_API_URL}/event/register`, {
    method: 'POST',
    headers: {
      'x-luma-api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      api_id: eventId,
      email,
      name,
    }),
  });

  return response.ok;
}
