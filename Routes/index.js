const express = require("express")
const router = express.Router()

const {validateAndPassToServices} = require("../Controller/calculator")

//setting routes
router.get("/getSipDelayCalculator", validateAndPassToServices)

module.exports = router