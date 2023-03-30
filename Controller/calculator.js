const {calculateSipDelayResults} = require("../Services/calculator")
const validate = require("../Constants/index")

const checkValidations = async (req, res) => {
    try {
        let {monthlyInvestment,investmentPeriod,rateOfReturn,delay} = req.query
        monthlyInvestment = parseInt(monthlyInvestment)
        investmentPeriod = parseInt(investmentPeriod)
        rateOfReturn = parseFloat(rateOfReturn)
        delay = parseInt(delay)

        if (
            monthlyInvestment < validate.MONTHLYINVESTMENTMIN ||
            monthlyInvestment > validate.MONTHLYINVESTMENTMAX
        )
            throw ("Invalid Monthly Investment value entered")

        if (
            investmentPeriod < validate.INVESTMENTPERIODMIN ||
            investmentPeriod > validate.INVESTMENTPERIODMAX
        )
            throw ("Invalid Investment Period value entered")


        if (
            rateOfReturn < validate.RATEOFRETURNMIN ||
            rateOfReturn > validate.RATEOFRETURNMAX
        )
            throw ("Invalid Rate of Return value entered")


        if (
            delay < validate.DELAYMIN ||
            delay > validate.DELAYMAX
        )
            throw ("Invalid Delay value entered")


        const result = await calculateSipDelayResults(req.query)

            res.send({
                status: 0,
                message: "Result Successfull",
                result: result
            })
    } catch (error) {
        res.send({
            status: -1,
            message: "Something is not good",
            result: error.message,
        })
    }
}

module.exports = {
    checkValidations
}