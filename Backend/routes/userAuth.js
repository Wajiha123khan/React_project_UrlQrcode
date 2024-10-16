const express = require("express");
const loginController = require("../controllers/loginController");
const registerController = require("../controllers/registerController");
const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
