

const User = require("../models/users");
const bcrypt = require("bcrypt");

 module.exports.createUser= async(userData)=> {
    const { username, name, email, contact, password } = userData;

    try {
       
        const hashedPassword = await bcrypt.hash(password, 10);

        const createdUser = new User({
            username,
            name,
            email,
            contact,
            password: hashedPassword 
        });

       
        const savedUser = await createdUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("User creation failed");
    }
}


