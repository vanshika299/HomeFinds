
const Product = require('../models/addproduct');
const UserModel =require('../models/Users');
const addProduct = async (req, res) => {
  
  try {
    const userId=req.user.id;
    const { productName, description, productFor, price, address,selectCategory } = req.body;
    const newProduct = new Product({
      productName,
      description,
      productFor,
      price,
      address,
      selectCategory,
      customer:userId
    });
    console.log("Request Body:", req.body);
    if (!productName || !description || !productFor || !price || !address || !selectCategory) {
      return res.status(400).json({ message: "Missing required fields" });
  }
   
    const savedProduct = await newProduct.save();
    await UserModel.findByIdAndUpdate(userId, { $push: { products: savedProduct._id } });
      res.status(201).json({
      message: 'Product added successfully',
      product: savedProduct
      
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding product', error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  
    const productId = req.params.id;
     
  try{

    if (!productId) {
      return res.status(400).json({ message: "Missing required product ID" });
     }
     const deletedProduct= await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
     return res.status(404).json({ message: "Product not found" });
   }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete product" });
  }
};



const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { productName, description,ProductFor,price,address,SelectCategory } = req.body;

  

  if (!productId) {
    return res.status(400).json({ message: "Missing required product ID" });
  }

  try {
   
    const updatedProduct = await Product.findByIdAndUpdate(
      
      productId,
      { productName, description , detail,price,address },
     
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error: error.message });
  }
};


const fetchAllProducts = async (req, res) => {
    try {
      
        const products = await Product.find({});
       
        res.status(200).json({
            message: "Products fetched successfully",
            data: products
        });
    } catch (error) {
       
        res.status(500).json({
            message: "Failed to fetch products",
            error: error.message
        });
    }
};




const buyProduct = async (req, res) => {
    try {
        const productData = await Product.find({ productFor: 'Buy' });
        res.json({ product: productData });
        } catch (error) {
        console.error('Error buying product:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


const donateProduct = async (req, res) => {
  try {
      const productsForDonation = await Product.find({ productFor: 'Donate' });
      console.log("Fetched products for donation:", productsForDonation);
      res.json({ products: productsForDonation });
  } catch (error) {
      console.error('Error fetching products for donation:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};
const rentProduct = async (req, res) => {
  try {
    
      const productsForRent = await Product.find({ productFor: 'Rent' });
      res.json({ products: productsForRent });
      console.log("Fetched products for rent:", productsForRent);
  } catch (error) {
      console.error('Error fetching products for rent:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
  }
};




module.exports = {addProduct,deleteProduct, updateProduct,fetchAllProducts,buyProduct,donateProduct,rentProduct};

