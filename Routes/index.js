const express = require("express");
const router = express.Router();

const controller = require("../Controller/calculator");

//api hit
router.get("/getResults", controller.calculate)


module.exports = router;