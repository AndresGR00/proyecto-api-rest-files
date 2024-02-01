const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: false, trim: true },
    flag: { type: String, required: false, trim: true },
    population: { type: Number, required: false,},
    continent: { type: String, required: false, trim: true },
    popularMonuments: [{ type: mongoose.Types.ObjectId, ref: "Monument" }],
  },
  { timestamps: true, collection: "countries" }
);

const Country = mongoose.model('Country', countrySchema, 'countries');
module.exports = Country;
