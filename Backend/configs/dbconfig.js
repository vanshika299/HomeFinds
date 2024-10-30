 const mongoose= require("mongoose");

 mongoose.connect("mongodb://localhost:27017/Home");

 mongoose.connection.on("connected", ()=>{
  console.log("connected to database successfully");
 });

 mongoose.connection.on("error", (err)=>{
  console.log(`failed to connect to mongodb server:${err}`);
 })
 module.exports=mongoose;