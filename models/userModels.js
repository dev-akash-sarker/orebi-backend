const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  bYear: {
    type: String,
    required: true,
    trim: true,
  },
  bMonth: {
    type: String,
    required: true,
    trim: true,
  },
  bDay: {
    type: String,
    required: true,
    trim: true,
  },
  randomOTP: {
    type: String,
    default: null,
  },
  //   gender: {
  //     type: String,
  //     required: true,
  //     enum: ["Male", "Female", "Others"],
  //   },
});

module.exports = mongoose.model("user", userSchema);
