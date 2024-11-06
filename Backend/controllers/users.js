const userService=require("../Services/users");

module.exports.getUsers=async(req,res)=>{
    try{
         const users=await userService.getUsers();
         res.json(users);
    }catch(error){
        console.error("Error fetching users:", error); // Log the error for debugging
        res.status(500).json({ message: "Internal server error" });
        //res.status(500).json({message:error});
    }
};


