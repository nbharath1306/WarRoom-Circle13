import Tesseract from 'tesseract.js';

export async function extractTextFromImage(imageUrl: string): Promise<string> {
  const { data: { text } } = await Tesseract.recognize(
    imageUrl,
    'eng',
    { logger: m => console.log(m) }
  );
  return text;
}

// Logic to parse extracted text into structured JSON using Groq will go here
// but it requires a Groq API key which is currently a placeholder.
