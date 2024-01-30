const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, trim: true, required: true, unique: true },
    userName: { type: String, trim: true, required: true, unique: true },
    password: { type: String, trim: true, required: true },
    rol: { type: String, trim: true, required: true },
    profileImg: { type: String, trim: true, required: true },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
