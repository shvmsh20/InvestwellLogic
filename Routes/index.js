const express = require("express")
const router = express.Router()

const {checkValidations} = require("../Controller/calculator")

//api hit
router.get("/getSipDelayResults", checkValidations)


module.exports = router