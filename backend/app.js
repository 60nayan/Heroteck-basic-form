const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  const { name, email, phone } = req.body;
  console.log('Received data:', name, email, phone);
  // Here you can process the received data, save it to a database, etc.
  res.send('Data received successfully');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
