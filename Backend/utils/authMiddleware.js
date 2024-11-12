const jwt=require("jsonwebtoken");
const secretKey=require("../configs/jwtConfig");

module.exports.authenticateToken=async(req,res,next)=>{
    const authHeader=req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message:"Unknown missing token"});

    }
    const[bearer, token]= authHeader.split(" ");
    if(bearer !=="Bearer"|| !token){
        return res.status(401).json({message:"unauthorized:Invalid token format"});
    }
    console.log("Using secretKey:", secretKey); // Log the secret key to check consistency
    console.log("Incoming token:", token);
    jwt.verify(token,secretKey, (err, user)=>{
       if(err){
        console.error("Token verification error:", err.message);
        return res.status(403).json({message:"forbidden Invalid token"});
       }
       req.user = user;
       next();
    })
}

module.exports.verifyToken=(token)=>{
     return jwt.verify(token,secretKey);
}


