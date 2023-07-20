const cloudinary = require('cloudinary').v2;
const dotenv = require("dotenv");

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadImage = async (req, res) => {
    try {
        let image = "./assets/Images/p8 Air Jordan 1 Retro High OG/thumbnail.webp";
        let result = await cloudinary.uploader.upload(image);
        let thumbnail = result.secure_url;
        return thumbnail;
    } catch (error) {
        res.status(500).json(error);
    }
}

const uploadImages = async (req, res) => {
    try {
        let uploadedImages = [];
        const images = [
            "./assets/Images/p8 Air Jordan 1 Retro High OG/09c9186d-e28e-4e46-9535-e49f09ddfdd9.webp",
            "./assets/Images/p8 Air Jordan 1 Retro High OG/a5eaef87-810b-4ceb-9d26-bbcfdb7894d6.webp",
            "./assets/Images/p8 Air Jordan 1 Retro High OG/air-jordan-1-retro-high-og-shoes-Pz6fZ9.jpeg",
            "./assets/Images/p8 Air Jordan 1 Retro High OG/b7d9e1fb-6119-4345-8efe-747dd6bffa6a.webp",
        ];
        for (let i = 0; i < images.length; i++) {
            let result = await cloudinary.uploader.upload(images[i]);
            uploadedImages.push(result);
        }
        return uploadedImages;
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = { uploadImage, uploadImages };

