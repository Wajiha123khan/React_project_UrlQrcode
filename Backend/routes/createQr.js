const express = require("express");
const qrController = require("../controllers/qrController");
const router = express.Router();

router.post("/", qrController);

module.exports = router;