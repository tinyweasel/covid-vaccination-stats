const CovidDatum = require('../models/covid-datum-model');

getCovidDataById = async (req, res) => {
  await CovidDatum.findOne({ _id: req.params.id }, (err, covidData) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!covidData) {
      return res
        .status(404)
        .json({ success: false, error: `Covid data not found` });
    }
    return res.status(200).json({ success: true, data: covidData });
  }).catch(err => console.log(err));
};

getCovidData = async (req, res) => {
  await CovidDatum.find({}, (err, covidData) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!covidData.length) {
      return res
        .status(404)
        .json({ success: false, error: `Covid data not found` });
    }
    return res.status(200).json({ success: true, data: covidData });
  }).catch(err => console.log(err));
};

module.exports = {
  getCovidDataById,
  getCovidData
};