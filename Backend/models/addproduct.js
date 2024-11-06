const mongoose = require("mongoose");
//const passportLocalMongoose = require("passport-local-mongoose");

const productAddSchema = new mongoose.Schema({
  productName: {
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
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  }
});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Product", productAddSchema);