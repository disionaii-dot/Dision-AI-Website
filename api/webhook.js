export default function handler(req, res) {
  // 1. Verification Logic (GET Request)
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    // Replace 'YOUR_VERIFY_TOKEN' with the one you'll put in Meta's dashboard
    if (mode === 'subscribe' && token === 'DI74819SI52ON') {
      res.status(200).send(challenge);
    } else {
      res.status(403).end();
    }
  } 

  // 2. Data Handling Logic (POST Request)
  else if (req.method === 'POST') {
    const body = req.body;
    console.log('New Webhook Event:', JSON.stringify(body, null, 2));
    res.status(200).send('EVENT_RECEIVED');
  }
}