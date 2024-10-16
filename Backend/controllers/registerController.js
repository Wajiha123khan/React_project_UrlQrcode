const bcrypt = require("bcryptjs");
const User = require("../models/usersModel");

const registerController = async function (req, res, next) {
  try {
    const { Username, Email, Password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    console.log(existingUser);
    if (existingUser) {
      return res.json({
        authSuccess: false,
        message: "Email already registered",
      });
    }

    // Hash the Password
    const salt = await bcrypt.genSalt(10);
    const PasswordHash = await bcrypt.hash(Password, salt);

    // Create a new user
    const newUser = await User.create({
      Username,
      Email,
      PasswordHash,
    });

    if (newUser) {
      return res.status(201).json({
        authSuccess: true,
        message: "User registered successfully. Login to continue",
      });
    } else {
      return res.status(201).json({
        authSuccess: false,
        message: "Can not register, try again",
      });
    }
  } catch (error) {
    return res.status(500).json({
      authSuccess: false,
      message: "Internal server error",
    });
  }
};

module.exports = registerController;
