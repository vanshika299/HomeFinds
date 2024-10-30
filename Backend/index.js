const express =require("express");
const signupRoute= require("./routes/signup");
const bodyParser=require("body-parser");
const  cors= require("cors");
const loginRoute=require("./routes/login");

const app=express();
const PORT=8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",signupRoute);
app.use("/auth",loginRoute);

app.listen(PORT, ()=>{
  console.log(`Server is running on :${PORT}`);
})