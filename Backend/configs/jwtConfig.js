const crypto=require("crypto");

const secretKey= crypto.randomBytes(20).toString("hex");
console.log("Secret Key:", secretKey);


module.exports={
    secretKey: secretKey
};