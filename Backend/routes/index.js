var express = require("express");
const { render } = require("../app");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Listening on port:3000");
});

module.exports = router;
