import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userMessage = req.body.message;

    try {
      // درخواست به دیپ‌سیک
      const response = await fetch('https://api.deepseek.com/v1/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.DEEPSEA_API_KEY}`,
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      const data = await response.json();
      res.status(200).json(data);

    } catch (error) {
      res.status(500).json({ error: 'Something went wrong', details: error.message });
    }

  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
