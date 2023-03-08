const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DB, () => {
  console.log("connected to mongodb");
});
