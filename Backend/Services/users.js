const User=require("../models/users");

async function getUsers(){
      const users=await User.find({});
};

exports.module={getUsers};