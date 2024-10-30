const jwt=require("jsonwebtoken");
const {secretKey} =require("../configs/jwtConfig");

function generateToken(user){
    const payload={
        //id:user._id,
        username:user.username,
    }
    return jwt.sign(payload, secretKey, {expireIn:"1h"});
};

module.exports={
    generateToken
};