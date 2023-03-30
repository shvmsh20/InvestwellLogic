const express = require("express")
const router = express.Router()

const {validateAndPassToServices} = require("../Controller/calculator")

//api hit
router.get("/getSipDelayCalculator", validateAndPassToServices)

module.exports = router