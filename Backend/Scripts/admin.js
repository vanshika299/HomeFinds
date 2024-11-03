const  User =require("../models/users");
const bcrypt=require("bcrypt");

async function createAdminAccount(){
    try{
        const existingAdmin= await User.findOne({email:"admin@test.com"});
        if(!existingAdmin){
             const newAdmin= new User({
                email:"admin2test.com",
                name:"admin",
                username:"admin",
                contact:12345678,

                
                password: await bcrypt.hash("admin",10),
              })
              await newAdmin.save();
              console.log("Admin account created successfully");
        }else{
            console.log("Admin already exist");
        }
    }catch(error){
        console.error(error.message);
    }
}
module.exports= createAdminAccount;