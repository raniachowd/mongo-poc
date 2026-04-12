//centralizes database connection, prevents duplication across files, keeps config isolated
// isolated mongodb connection logic into a dedicated module for reusability and maintainability
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/healthcare-poc")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));