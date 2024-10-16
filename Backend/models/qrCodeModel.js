const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const qrCodeSchema = new Schema({
  QRCodeID: { type: String, required: true, unique: true },
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  QRCodeData: { type: String, required: true },
  URL: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const QRCode = mongoose.model("QRCode", qrCodeSchema);

module.exports = QRCode;
