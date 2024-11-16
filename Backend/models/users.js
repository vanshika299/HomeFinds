const mongoose=require("../configs/dbconfig");

const userSchema=new mongoose.Schema({
  username:{
    type:String,
    required:true,
  },
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required: true,
  },
  contact:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true,
  },
  

});

module.exports=mongoose.model("user",userSchema);