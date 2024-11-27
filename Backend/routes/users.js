const express=require("express");
const cors=require("cors");
const userController =require("../controllers/users");
const authMiddleware=require("../utils/authMiddleware");


const router=express.Router();
router.use(cors());
router.get("/users",authMiddleware.authenticateToken,userController.getUsers);
router.get("/userprofile",authMiddleware.authenticateToken, userController.getUsersById);
router.post("/update-users",authMiddleware.authenticateToken,userController.updateUser);
router.delete("/delete-users",authMiddleware.authenticateToken,userController.deleteUser);
router.post("/users",userController.createUser);
router.get("/Users",authMiddleware.authenticateToken,userController.getProductsByUser);

module.exports=router;