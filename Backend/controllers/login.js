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


module.exports.refreshToken= async (req, res) => {
  try{
    const{token} =req.body;
   
    const newToken =await authService.refreshToken(token);
  
   
    
    res.json({newToken:newToken});
  }catch(error){
    res.status(401).json({message:"Invalid token"});
  }

};
 
