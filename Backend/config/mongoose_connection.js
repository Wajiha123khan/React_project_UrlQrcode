const mongoose = require("mongoose");
const config = require("config");

mongoose
  .connect(`${config.get("MONGODB_URI")}/URL_QR_SAAS`)
  .then(() => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = mongoose.connection;
