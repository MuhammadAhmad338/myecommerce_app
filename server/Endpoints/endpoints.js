const { getAllProducts, addProduct,  searchProduct,
    getSingleProduct, deleteProduct } = require("../Controllers/products");
const express = require("express");

const router = express.Router();

router.get("/getAllProducts", getAllProducts);
router.get("/getProduct/:id", getSingleProduct);
router.post("/addProduct", addProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/searchProduct", searchProduct);

module.exports = router;