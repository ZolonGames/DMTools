var mongoose = require("mongoose");

var ForecastSchema = new mongoose.Schema({
    name: String,
    forecast: String
});

module.exports = mongoose.model("Forecast", ForecastSchema);