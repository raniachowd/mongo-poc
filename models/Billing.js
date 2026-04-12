const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  appointmentId: mongoose.Schema.Types.ObjectId,
  amount: Number,
  status: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Billing", billingSchema);