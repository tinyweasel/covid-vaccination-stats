const express = require('express');
const bodyParser = require('body-parser');

const { getCovidData } = require('./get-vaccination-data')

const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/country-data', async (req, res) => {
  const irelandData = await getCovidData();
  res.send(irelandData);
});

app.post('/api/country-data', (req, res) => {
  console.log(req.body);
  res.send(
    `Country entered: ${req.body.post}`,
  );
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});