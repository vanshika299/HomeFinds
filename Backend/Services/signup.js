

const User = require("../models/Users");
const bcrypt = require("bcrypt");

 module.exports.createUser= async(userData)=> {
    const { username, name, email, contact, password,address } = userData;

    try {
       
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = new User({
            username,
            name,
            email,
            contact,
            password: hashedPassword, 
            address
        });

       
        const savedUser = await createdUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("User creation failed");
    }
}


