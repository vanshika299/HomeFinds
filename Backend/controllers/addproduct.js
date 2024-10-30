const AddProduct = require("../models/addproduct");


module.exports.addproduct = async (req, res) => {
  try {
    let medicine = ({ productname,description,detail,price, address } =
      req.body);

    if (!productname || !description || !detail || !price || !address)
      return res.status(400).json({
        message: "Some important information about medicine is missing...",
      });
      productname = productname.toLowerCase();

      const newproduct = new Product({
        productname,
        description,
        detail,
        price,
        address,
      });
      await newproduct.save();
  
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error", error });
    }
  };