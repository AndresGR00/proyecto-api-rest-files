const mongoose = require("mongoose");

const monumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    img: { type: String, required: false, trim: true },
    country: { type: String, required: true, trim: true },
    constructionYear: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: "monuments",
  }
);

const Monument = mongoose.model("Monument", monumentSchema, "monuments");
module.exports = Monument;
