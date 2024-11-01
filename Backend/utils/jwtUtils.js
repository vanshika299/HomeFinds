const jwt=require("jsonwebtoken");
const {secretKey} =require("../configs/jwtConfig");

function generateToken(user){
    const payload={
     
        username:user.username,
    }
    return jwt.sign(payload, secretKey, {expiresIn:"1h"});
};

module.exports={
    generateToken
};