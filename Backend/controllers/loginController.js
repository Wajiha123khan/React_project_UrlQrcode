const bcrypt = require("bcryptjs");
const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const loginController = async function (req, res, next) {
  try {
    const { Email, Password } = req.body;
    // Find the user by email
    const user = await User.findOne({ Email });
    if (!user) {
      return res.json({
        authSuccess: false,
        message: "Invalid email or password",
      });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(Password, user.PasswordHash);
    if (!isMatch) {
      return res.json({
        authSuccess: false,
        message: "Invalid email or password",
      });
    }

    // Generate JWT
    const payload = {
      user: {
        _id: user._id,
        Email: user.Email,
      },
    };

    const token = jwt.sign(payload, keys.JWT_KEY);

    // Set the token as a cookie
    res.cookie("token", token);

    res.json({
      authSuccess: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      authSuccess: false,
      message: "Internal server error",
    });
  }
};

module.exports = loginController;
