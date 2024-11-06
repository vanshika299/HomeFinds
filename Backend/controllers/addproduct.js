// const AddProduct = require("../models/addproduct");


// module.exports.addproduct = async (req, res) => {
//   try {
//     const medicine = ({ productname,description,detail,price, address } =
//       req.body);

//     if (!productname || !description || !detail || !price || !address)
//       return res.status(400).json({
//         message: "Some important information about medicine is missing...",
//       });
//       productname = productname.toLowerCase();

//       const newproduct = new Product({
//         productname,
//         description,
//         detail,
//         price,
//         address,
//       });
//       await newproduct.save();
  
      
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Internal Server Error", error });
//     }
//   };
  const Product = require('../models/addproduct');

// Controller function to add a new product
const addProduct = async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const { productName, description, detail, price, address } = req.body;
    

   
    const newProduct = new Product({
      productName,
      description,
      detail,
      price,
      address
    });
    if (!productName || !description || !detail || !price || !address) {
      return res.status(400).json({ message: "Missing required fields" });
  }
   
    const savedProduct = await newProduct.save();

  
    res.status(201).json({
      message: 'Product added successfully',
      product: savedProduct
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
};

module.exports = {addProduct};

