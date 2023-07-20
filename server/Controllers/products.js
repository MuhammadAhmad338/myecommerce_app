const Product = require("../Model/productModel");
const sizes = require("../sizes.json");
const { uploadImages, uploadImage } = require("../Helper/uploadImages");

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json('Some Error Occured');
    }
}

const getSingleProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const product = await Product.findById(_id);
        res.status(200).json(product); 
    } catch(error) {
        res.status(500).json('Some error occured!');
    }
}

const addProducts = async (req, res) => {
    try {
        const { title, subtitle, price, original_price, description } = req.body;
        let images = await uploadImages();
        let thumbnail = await uploadImage();
        const product = new Product({ title, subtitle, price, original_price, description, sizes, images, thumbnail, sizes});
        product.save();
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

const productData = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json('Some Error Occured');
    }
}

module.exports = { getAllProducts, addProducts, getSingleProduct }
