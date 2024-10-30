const authService=require("../Services/login");

module.exports.login = async (req, res) => {
      try{
        const{username, password} =req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
          }
        const token =await authService.login(username,password);
        if (!token) throw new Error("Token generation failed");
        
        res.json({token:token});
      }catch(error){
        res.status(401).json({message:"Invalid credentials"});
      }

}
