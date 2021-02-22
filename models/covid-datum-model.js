const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CovidDatum = new Schema(
  {
    date: { type: String, required: false },
    total_cases: { type: Number, required: false },
    new_cases: { type: Number, required: false },
    new_cases_smoothed: { type: Number, required: false },
    new_deaths_smoothed: { type: Number, required: false },
    total_cases_per_million: { type: Number, required: false },
    new_cases_per_million: { type: Number, required: false },
    new_cases_smoothed_per_million: { type: Number, required: false },
    total_deaths_per_million: { type: Number, required: false },
    new_deaths_per_million: { type: Number, required: false },
    new_deaths_smoothed_per_million: { type: Number, required: false },
    reproduction_rate: { type: Number, required: false },
    new_tests: { type: Number, required: false },
    total_tests: { type: Number, required: false },
    total_tests_per_thousand: { type: Number, required: false },
    new_tests_per_thousand: { type: Number, required: false },
    new_tests_smoothed: { type: Number, required: false },
    new_tests_smoothed_per_thousand: { type: Number, required: false },
    positive_rate: { type: Number, required: false },
    tests_per_case: { type: Number, required: false },
    tests_units: { type: String, required: false },
    total_vaccinations: { type: Number, required: false },
    people_vaccinated: { type: Number, required: false },
    people_fully_vaccinated: { type: Number, required: false },
    new_vaccinations: { type: Number, required: false },
    new_vaccinations_smoothed: { type: Number, required: false },
    total_vaccinations_per_hundred: { type: Number, required: false },
    people_vaccinated_per_hundred: { type: Number, required: false },
    people_fully_vaccinated_per_hundred: { type: Number, required: false },
    new_vaccinations_smoothed_per_million: { type: Number, required: false },
    stringency_index: { type: Number, required: false },
  },
  { timestamps: true },
)

module.exports = mongoose.model('coviddatum', CovidDatum)
