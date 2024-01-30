const mongoose = require("mongoose");

const monumentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    img: { type: String, required: true, trim: true },
    country: [{ type: mongoose.Types.ObjectId, ref: "Country" }],
    constructionYear: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: "monuments",
  }
);

const Monument = mongoose.model("Monument", monumentSchema, "monuments");
module.exports = Monument;
