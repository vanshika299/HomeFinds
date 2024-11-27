const mongoose=require("../configs/dbconfig");
//const Products =require("./addproduct");

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
  address:{
    type:String,
    required:true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product", 
    }],
  

});

module.exports= mongoose.model("user", userSchema);