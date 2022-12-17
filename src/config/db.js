const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://gautam:gautam@emi-calculator.drryt5k.mongodb.net/Shopping"
  );
};

module.exports = connect;
