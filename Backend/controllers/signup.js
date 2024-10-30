const userService=require("../Services/signup");



async function adduser(req,res){
  try{
    const userData=req.body;
    const user=await userService.createUser(userData);
    res.status(200).json({user:user, message:"user created successfully"});
  }catch(error){
    console.log(error);
    res.status(400).json({message:error.message});
  }
}


module.exports.signup = async (req, res) => {
  try {
      const userData = req.body;
      const user = await userService.createdUser(userData);
      res.status(201).json({ user: user, message: "New User created Successfully" });
  } catch (err) {
      console.error("Error registering user:", err);
      res.status(400).json({ error: 'Failed to create user', details: err.message });
  }
}


