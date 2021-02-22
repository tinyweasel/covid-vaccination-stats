const Country = require('../models/country-model');

getCountryDataByName = async (req, res) => {
  await Country.findOne({ location: req.params.name }, (err, country) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!country) {
      return res
        .status(404)
        .json({ success: false, error: `Country data not found` });
    }
    return res.status(200).json({ success: true, data: country });
  }).catch(err => console.log(err));
};

getCountryData = async (req, res) => {
  await Country.find({}, (err, country) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!country.length) {
      return res
        .status(404)
        .json({ success: false, error: `Country data not found` });
    }
    return res.status(200).json({ success: true, data: country });
  }).catch(err => console.log(err));
};


module.exports = {
  getCountryDataByName,
  getCountryData
};