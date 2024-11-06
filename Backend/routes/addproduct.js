const express = require("express");
const router = express.Router();
const addProduct = require("../controllers/addProduct");


router.route("/products").post(addProduct);
module.exports = router;