const fetch = require('node-fetch')

const getCovidData = async () => {
  const url = 'https://covid.ourworldindata.org/data/owid-covid-data.json'
  const response = await fetch(url);
  const countryData = await response.json();
  const irelandData = countryData['IRL'].data;
  const filteredData = irelandData.filter(dataPoint => dataPoint.hasOwnProperty('total_vaccinations'));
  const latestIrelandData = filteredData[filteredData.length - 1];

  return latestIrelandData;
}

module.exports = { getCovidData }
