const mongoose = require("mongoose");


const productAddSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  productFor: {
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
  },
  selectCategory: {
    type: String,
    required: true,
  }
});



module.exports = mongoose.model("Product", productAddSchema);