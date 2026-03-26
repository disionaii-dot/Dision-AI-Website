export default async function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('No authorization code provided.');
  }

  try {
    // These are found in your Meta Dashboard -> Settings -> Basic
    const appId = process.env.META_APP_ID;
    const appSecret = process.env.META_APP_SECRET;
    const redirectUri = 'https://www.disionai.in/api/auth/callback';

    // Step 1: Exchange code for short-lived token
    const url = `https://graph.facebook.com/v21.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${code}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.access_token) {
      // For now, we will just display it. In a real app, you'd save this to a database.
      res.status(200).json({
        message: 'Authentication Successful!',
        token: data.access_token
      });
    } else {
      res.status(500).json({ error: 'Failed to exchange code', details: data });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server Error', message: error.message });
  }
}