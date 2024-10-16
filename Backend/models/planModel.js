const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planSchema = new Schema({
  PlanID: { type: String, required: true, unique: true },
  PlanName: { type: String, required: true },
  Price: { type: Number, required: true },
  Features: { type: Schema.Types.Mixed, required: true },
  QRCodeLimit: { type: Number, required: true },
  URLLimit: { type: Number, required: true },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
