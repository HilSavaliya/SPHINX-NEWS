// In file: /api/getNews.js

export default async function handler(request, response) {
  // ✅ FIX: Provide a base URL to the URL constructor.
  const fullURL = new URL(request.url, `http://${request.headers.host}`);
  const category = fullURL.searchParams.get('category') || 'general';

  // Your API key stored as an environment variable on Vercel
  const apiKey = process.env.VITE_NEWS_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

  try {
    const apiResponse = await fetch(url);
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      // Pass the error message from NewsAPI to your frontend
      throw new Error(data.message || 'Failed to fetch news from source');
    }

    return response.status(200).json(data);

  } catch (error) {
    // Log the actual error on the server for debugging
    console.error("Server-side error:", error);
    // Send a generic error message to the client
    return response.status(500).json({ message: error.message });
  }
}