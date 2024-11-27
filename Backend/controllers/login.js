const authService=require("../Services/login");
const userModel=require("../models/Users");

module.exports.login = async (req, res) => {
      try{
        // const{username, password} =req.body;
       
        // const token =await authService.login(username,password);
      
       
        
        // res.json({token:token});
        const { username, password } = req.body; 
        const token = await authService.login(username, password); 
        if (!token) { 
            return res.status(401).json({ error: "Invalid username or password" }); 
        } 
        const user = await userModel.findOne({ username: username }); 
        if (!user) { 
            return res.status(404).json({ error: "User not found" }); 
        } 
         
 
        // Set the JWT token and role in cookies 
        res.cookie("token", token, { 
            httpOnly: true, // Prevent access to the cookie from JavaScript 
            secure: true, // Use secure cookies in production (HTTPS) 
            maxAge: 7 * 24 * 60 * 60 * 1000, // Expiry of 7 days 
        }); 
 
       
 
        res.status(200).json({ token: token });
      }catch(error){
        res.status(401).json({message:"Invalid credentials"});
      }

};


module.exports.refreshToken= async (req, res) => {
  try{
    const token = req.cookies.token || req.headers['authorization'].split(' ')[1]; 
        if (!token) { 
            return res.status(400).json({ error: "No token provided" }); 
        } 
        const newToken = await bcryptLogin.refreshToken(token); 
        if (!newToken) { 
            return res.status(401).json({ error: "Failed to refresh token" }); 
        } 
 
        res.cookies('token', newToken, { 
            httpOnly: true, 
            secure: true, 
            maxAge: 7 * 24 * 60 * 60 * 1000, 
        }); 
        res.json({ token: newToken });
    
  }catch(error){
    res.status(401).json({message:"Invalid token"});
  }


};
 
