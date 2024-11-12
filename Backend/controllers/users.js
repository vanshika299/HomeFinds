const userService=require("../Services/users");
const User =require("../models/Users");
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
        const userData = await User.findById(UserId);
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
    // const UserId = req.params.id;
  
  
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // UserId,
        // { username, name , email,contact,password },
        if (req.body.username) user.username = req.body.username;
        if(req.body.name) user.name=req.body.name;
        if (req.body.email) user.email = req.body.email;
        if(req.body.contact) user.contact=req.body.contact;
        if (req.body.password) {
            user.password = await bcrypt.hash(req.body.password, 10);
        }

        updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
module.exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
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
