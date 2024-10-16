const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
const keys = require("../config/keys");

const isLoggedIn = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      authSuccess: false,
      message: "No token, authorization denied",
    });
  }

  try {
    const decoded = jwt.verify(token, keys.JWT_KEY);
    const userFromDb = await User.findOne({ _id: decoded.user._id });
    if (userFromDb) {
      req.user = decoded.user;
      next();
    } else {
      return res.status(401).json({
        authSuccess: false,
        message: "Token is not valid",
      });
    }
  } catch (err) {
    res.status(401).json({
      authSuccess: false,
      message: "Token is not valid",
    });
  }
};

module.exports = isLoggedIn;
