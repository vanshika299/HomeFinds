// const user=require("../models/users");

// const bcrypt=require("bcrypt");

// async function createUser(userData){
//     const{username,name,email,contact,password}=userData;
//     const hashedPassword=await bcrypt.hash(password,10);
//     const createdUser=new user({
//         username,
//         name,
//         email,
//         contact,
//         password:hashedPassword
//     });

//     const savedUser=await createdUser.save();
//     return savedUser;
// }

// module.exports={createUser};

const User = require("../models/users");
const bcrypt = require("bcrypt");

async function createUser(userData) {
    const { username, name, email, contact, password } = userData;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const createdUser = new User({
            username,
            name,
            email,
            contact,
            password: hashedPassword // Ensure the property matches your schema
        });

        // Save the user to the database
        const savedUser = await createdUser.save();
        return savedUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("User creation failed");
    }
}

module.exports = { createUser };
