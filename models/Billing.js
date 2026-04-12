//stores financial data, enables aggregation (revenue analytics) -- aggregation = advanced querying + data processing inside MongoDB
const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient"
  },
  amount: Number
});

module.exports = mongoose.model("Billing", billingSchema);