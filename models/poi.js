var mongoose = require("mongoose");

var POISchema = new mongoose.Schema({
    name: String,
    imagePath: String,
    type: String,
    description: String
});

module.exports = mongoose.model("POI", POISchema);