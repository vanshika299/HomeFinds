const express =require("express");
const signupRoute= require("./routes/signup");
const bodyParser=require("body-parser");
const  cors= require("cors");
const loginRoute=require("./routes/login");
const createAdminAccount= require("./Scripts/admin");
const userRoute=require("./routes/users");

const app=express();
const PORT=8000;

const productRoute = require('./routes/addproduct');



app.use(bodyParser.json());
app.use(cors());

createAdminAccount();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",signupRoute);
app.use("/auth",loginRoute);
app.use("/api",userRoute);
app.use("/add",productRoute);
app.use("/delete",productRoute);
app.use("/update",productRoute);
app.use("/fetch",productRoute);
app.use("/fetch",userRoute);
app.use("/update",userRoute);
app.use("/delete",userRoute);
app.use("/create",userRoute);
app.use("/buy",productRoute);
app.use("/donate",productRoute);
app.use("/rent",productRoute);

app.listen(PORT, ()=>{
  console.log(`Server is running on :${PORT}`);
})