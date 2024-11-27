const jwt=require("jsonwebtoken");
const secretKey=require("../configs/jwtConfig");

module.exports.authenticateToken=async(req,res,next)=>{
    
    let token = req.cookies.token; // Get token from cookies 
 
    if (!token) { 
        const authHeader = req.headers['authorization']; 
        if (authHeader && authHeader.startsWith('Bearer ')) { 
            token = authHeader.split(' ')[1]; 
        } 
    } 
 
    if (!token) { 
        return res.status(403).json({ message: 'No token provided' }); 
    } 
 
    jwt.verify(token, secretKey, (err, user) => { 
        if (err) { 
            console.log("JWT Verification Error: ", err); 
            return res.status(401).json({ message: "Unauthorized!" }); 
        } 
        req.user = user; 
        next(); 
    });
}

module.exports.verifyToken=(token)=>{
     return jwt.verify(token,secretKey);
}


