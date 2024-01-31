const jsonwebtoken = require("jsonwebtoken");

const generateSign = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_KEY, { expiresIn: "10w" });
};

const verifyToken = (token) => {
  return jsonwebtoken.verify(token, process.env.JWT_KEY);
};

module.exports = { generateSign, verifyToken };
