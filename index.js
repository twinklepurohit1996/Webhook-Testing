const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const VERIFICATION_TOKEN = 'testing';

app.post('/webhook', (req, res) => {
  const receivedToken = req.headers['verification-token'];

  if (receivedToken === VERIFICATION_TOKEN) {
    const payload = req.body;
    console.log('Received verified webhook:', payload);
    res.status(200).send('Webhook received');
  } else {
    console.log('Invalid verification token');
    res.status(403).send('Forbidden');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




