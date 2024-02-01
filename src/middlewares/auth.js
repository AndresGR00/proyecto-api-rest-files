const User = require("../api/models/user.model");
const { verifyToken } = require("../config/jwt");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(400).json("You are not allowed");
    }
    const fixedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(fixedToken);
    const user = await User.findById(id);
    user.password = null;
    req.user = user;
    next();
  } catch (error) {
    return res.status(400).json("You are not allowed");
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    

    if (!token) {
      return res.status(400).json("You are not allowed");
    }
    const fixedToken = token.replace("Bearer ", "");
    const { id } = verifyToken(fixedToken);
    const user = await User.findById(id);

    if (user.rol === "isAdmin") {
      user.password = null;
      req.user = user;
      next();
    } else {
      return res.status(400).json("You need to be an administrator");
    }
  } catch (error) {
    return res.status(400).json("You are not allowed");
  }
};

module.exports = { isAuth, isAdmin };
