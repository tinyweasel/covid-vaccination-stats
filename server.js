const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const path = require('path');

const { getCovidData } = require('./get-vaccination-data')
const db = require('./database');
const router = require('./routes/router')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
  res.send('Fuck germs!');
})

app.get('/api/ireland-data', async (req, res) => {
  const irelandData = await getCovidData();
  res.send(irelandData);
});

app.use('/api', router)

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