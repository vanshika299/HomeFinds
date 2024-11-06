const express = require("express");
// const cors=require("cors");
const router = express.Router();
const addProduct = require("../controllers/addProduct");
// router.use(cors());


router.post("/products",addProduct.addProduct);
module.exports = router;