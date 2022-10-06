const mongoose = require("mongoose");
const { Link } = require("react-router-dom");

const BloodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: false,
      unique: true,
    },
    mobile: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    bloodGroup:{
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blood", BloodSchema);
