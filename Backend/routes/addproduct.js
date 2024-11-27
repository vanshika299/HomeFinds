const express = require("express");
const auth=require("../utils/authMiddleware");

const router = express.Router();
const addProduct = require("../controllers/addProduct");
const deleteProduct=require("../controllers/addProduct");
const updateProduct = require("../controllers/addProduct");
const fetchAllProducts =require("../controllers/addProduct");
const buyProduct=require("../controllers/addProduct");
const donateProduct=require("../controllers/addProduct");
const rentProduct=require("../controllers/addProduct");
const getBuyProductCount=require("../Scripts/admin");




router.post("/products",auth.authenticateToken,addProduct.addProduct);
router.post("/deleteProducts/:id",deleteProduct.deleteProduct);
router.put("/updateProducts/:id", updateProduct.updateProduct);
router.get("/fetchProducts",fetchAllProducts.fetchAllProducts);
router.get("/buyProduct",buyProduct.buyProduct);
router.get("/donateProduct",donateProduct.donateProduct);
router.get("/rentProduct",rentProduct.rentProduct);
router.get('/count', getBuyProductCount.getBuyProductCount);
router.get('/getProduct/:id', fetchAllProducts.getProductById);
module.exports = router;