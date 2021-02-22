const express = require('express');

const CountryController = require('../controllers/country-controller');
const CovidDataController = require('../controllers/covid-data-controller');

const router = express.Router();

router.get('/country-data/:name', CountryController.getCountryDataByName);
router.get('/country-data', CountryController.getCountryData);
router.get('/covid-data/:id', CovidDataController.getCovidDataById);
router.get('/covid-data', CovidDataController.getCovidData);

module.exports = router;