const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Secure App');
});

app.listen(3000, () => {
  console.log('Secure app running on port 3000');
});

