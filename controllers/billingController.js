//demonstrates mongodb aggregation pipeline, performs analytics
const Billing = require("../models/Billing");

exports.getRevenue = async (req, res) => {
  const result = await Billing.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: "$amount" }
      }
    }
  ]);

  res.json(result);
};