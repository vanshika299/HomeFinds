const express = require("express");
const router = express.Router();
const addproduct = require("../controllers/addproducts");


router.route("/addproduct").post(userController.addproduct);
module.exports = router;