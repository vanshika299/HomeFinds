const userService=require("../Services/users");

async function getUsers(req,res){
    try{
         const users=await userService.getUsers();
         res.json(users);
    }catch{
        res.status(500).json({message:error});
    }
};

module.exports={getUsers};