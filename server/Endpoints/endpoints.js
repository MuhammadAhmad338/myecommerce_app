const { getAllProducts, addProducts, getSingleProduct } = require("../Controllers/products");
const express = require("express");

const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getSingleProduct);
router.post("/addProduct", addProducts);

module.exports = router;