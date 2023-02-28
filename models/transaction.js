const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    userId:{
      type:String,
      // required:true,
    },
    amount: {
      type: Number,
      // required: [true, "Amount is required"],
    },
    type:{
      type:String,
    },
    category: {
      type: String,
      // required: [true, "Require"],
    },
    description: {
      type: String,
      // required: [true, "Require"],
    },
    date: {
      type: Date,
      // required: [true, "Require"],
    },
  },
  { timestamps: true }
);

const transactions = mongoose.model("transactions", transactionSchema);
module.exports = transactions
