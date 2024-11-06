const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const productAddSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", productAddSchema);