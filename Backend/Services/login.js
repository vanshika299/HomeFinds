const bcrypt=require("bcrypt");
const User =require("../models/users");
const {generateToken} =require ("../utils/jwtUtils");

async function login(username,password) {
    try{
        const existingUser=await User.findOne({username});
        if(!existingUser){
            throw new Error("User not found");
        }
        const isPasswordValid=bcrypt.compare(password, existingUser.password);
        // if(!isPasswordValid){
        //     throw new Error ("Incorrect password");

        // }
        const token =generateToken(existingUser);
        return token;
    }catch(error){
        throw new Error ("Invalid credentials");
    }
}
module.exports={login};
