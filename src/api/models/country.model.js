const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    flag: { type: String, required: true, trim: true },
    population: { type: Number, required: true,},
    continent: { type: String, required: true, trim: true },
    popularMonuments: [{ type: mongoose.Types.ObjectId, ref: "Monument" }],
  },
  { timestamps: true, collection: "countries" }
);

const Country = mongoose.model('Country', countrySchema, 'countries');
module.exports = Country;
