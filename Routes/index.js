const express = require('express')
const router = express.Router()

const {getSipDelayCalculatedData} = require('../Controller/calculator')

//setting routes
router.get('/getSipDelayCalculator', getSipDelayCalculatedData)

module.exports = {
    router
}