const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subscriptionSchema = new Schema({
  SubscriptionID: { type: String, required: true, unique: true },
  UserID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  PlanID: { type: Schema.Types.ObjectId, ref: "Plan", required: true },
  StartDate: { type: Date, required: true },
  EndDate: { type: Date, required: true },
  Status: { type: String, required: true },
  CreatedAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

const Subscription = mongoose.model("Subscription", subscriptionSchema);

module.exports = Subscription;
