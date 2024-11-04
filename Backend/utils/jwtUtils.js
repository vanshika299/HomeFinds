const jwt=require("jsonwebtoken");
const secretKey  =require("../configs/jwtConfig");

function generateToken(user){
    const payload={
     
        username:user.username,
    };
   // return jwt.sign(payload, secretKey, {expiresIn:"1h"});
    try {
        return jwt.sign(payload, secretKey, { expiresIn: "1h" });
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Token generation failed");
    }
}

module.exports={
    generateToken
};