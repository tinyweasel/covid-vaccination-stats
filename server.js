const express = require('express');
const bodyParser = require('body-parser');

const { getCovidData } = require('./get-vaccination-data')

const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/covid', async (req, res) => {
  const irelandData = await getCovidData();
  res.send(irelandData);
});

app.post('/api/covid', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

// if (process.env.NODE_ENV === 'production') {
//   // Serve any static files
//   app.use(express.static(path.join(__dirname, 'client/build')));

//   // Handle React routing, return all requests to React app
//   app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'client/src', 'index.tsx'));
//   });
// }

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});