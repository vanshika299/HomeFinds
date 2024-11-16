const  User =require("../models/Users");
const Product = require('../models/addproduct');
const bcrypt=require("bcrypt");
const user=require('../models/Users');

const  createAdminAccount = async (req,res)=>{
    try{
        const existingAdmin= await User.findOne({email:"admin@test.com"});
        if(!existingAdmin){
             const newAdmin= new User({
                email:"admin@test.com",
                name:"admin",
                username:"admin",
                contact:12345678,

                
                password: await bcrypt.hash("admin",10),
              })
              await newAdmin.save();
              console.log("Admin account created successfully");
        }else{
            console.log("Admin already exist");
        }
    }catch(error){
        console.error(error.message);
    }
}

const getBuyProductCount = async (req, res) => {
  try {
    
    const count = await Product.countDocuments({ productFor: 'Buy' });
    const count1 = await Product.countDocuments({ productFor: 'Rent' });
    const count2 = await Product.countDocuments({ productFor: 'Donate' });
    const userCount = await user.countDocuments();
    
    
    res.status(200).json({
      success: true,
      count: count,
      count1:count1,
      count2:count2,
      user:userCount
      
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching buy product count',
      error: error.message
    });
  }
};





module.exports= {createAdminAccount,getBuyProductCount};