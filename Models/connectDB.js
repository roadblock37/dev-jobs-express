const mongoose = require("mongoose");

const connectDB = (url) => {
  const connectDB = mongoose.connect(url);
  return connectDB;
};

module.exports = connectDB;
