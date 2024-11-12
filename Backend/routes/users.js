const express=require("express");
const cors=require("cors");
const userController =require("../controllers/users");
const authMiddleware=require("../utils/authMiddleware");

const router=express.Router();
router.use(cors());
router.get("/users",authMiddleware.authenticateToken,userController.getUsers);
router.get("/user",authMiddleware.authenticateToken, userController.getUsersById);
router.put("/users/:id",userController.updateUser);
router.post("/users/:id",userController.deleteUser);
router.post("/users",userController.createUser);

module.exports=router;