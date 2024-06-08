
const express = require("express");
const imageRouter = express.Router();
const { generateImage, get1 } = require("../controllers/imageController.js");

imageRouter.route('/')
    .post(generateImage)
    .get(get1)

module.exports = imageRouter;
