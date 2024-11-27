const userService=require("../Services/users");
const User =require("../models/Users");
const Product = require("../models/addproduct");
const bcrypt = require('bcrypt'); 

module.exports.getUsers=async(req,res)=>{
    try{
         const users=await userService.getUsers();
         res.json(users);
    }catch(error){
        console.error("Error fetching users:", error); 
        res.status(500).json({ message: "Internal server error" });
        
    }
};
module.exports.getUsersById = async (req, res) => {
 
    try {
        const UserId=req.user.id;
        const userData = await User.findById(UserId).populate("products", "productName description price ");
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ user: userData });
        
    } catch (error) {
        console.error("Error fetching users:", error); 
        res.status(500).json({ message: error.message });
    }
};


module.exports.updateUser = async (req, res) => {
    try {
        const userId = req.user.id;
        const userData = req.body;
        if (!userData) {
            return res.status(404).json({ message: "User not found" });
        }
     
        const users = await User.findByIdAndUpdate
            (userId, userData, { new: true, runValidators: true });
       // const updatedUser = await user.save();
        res.status(200).json(users);
        
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        await Product.deleteMany({ customer: req.user.id });
        const user = await User.findByIdAndDelete(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.createUser = async (req, res) => {
    try {
        const { username,name, email,contact, password } = req.body;
        
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            name,
            email,
            contact,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
 

module.exports.getProductsByUser =async(req,res)=>{
  try {
    const userId = req.user.id;
    const products = await Product.find({ user: userId }).populate("user", "username email");
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}


