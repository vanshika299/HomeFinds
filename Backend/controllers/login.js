const authService=require("../Services/login");

module.exports.login = async (req, res) => {
      try{
        const{username, password} =req.body;
       
        const token =await authService.login(username,password);
      
       
        
        res.json({token:token});
      }catch(error){
        res.status(401).json({message:"Invalid credentials"});
      }

};
//console.log("login:", login);

module.exports.refreshToken= async (req, res) => {
  try{
    const{token} =req.body;
   
    const newToken =await authService.refreshToken(token);
  
   
    
    res.json({newToken:newToken});
  }catch(error){
    res.status(401).json({message:"Invalid token"});
  }

};
 // Should log function, not undefined
//console.log("refreshToken:", refreshToken);
