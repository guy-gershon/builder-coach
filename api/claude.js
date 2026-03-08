export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-beta': 'messages-2023-12-15'
      },
      body: JSON.stringify(body)
    });
    
    const text = await response.text();
    console.log('Anthropic status:', response.status);
    console.log('Anthropic body:', text.slice(0, 500));
    
    res.status(response.status).json(JSON.parse(text));
  } catch(err) {
    console.error('Handler error:', err);
    res.status(500).json({ error: err.message });
  }
}
