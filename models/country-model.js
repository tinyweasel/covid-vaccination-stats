const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CovidDatumSchema = require('./covid-datum-model').schema;

const Country = new Schema(
  {
    continent: { type: String, required: false },
    location: { type: String, required: false },
    population: { type: Number, required: false },
    population_density: { type: Number, required: false },
    aged_65_older: { type: Number, required: false },
    aged_70_older: { type: Number, required: false },
    gdp_per_capita: { type: Number, required: false },
    cardiovasc_death_rate: { type: Number, required: false },
    diabetes_prevalence: { type: Number, required: false },
    handwashing_facilities: { type: Number, required: false },
    hospital_beds_per_thousand: { type: Number, required: false },
    life_expectancy: { type: Number, required: false },
    human_development_index: { type: Number, required: false },
    data: [CovidDatumSchema]
  },
  { timestamps: true },
);

module.exports = mongoose.model('country', Country);