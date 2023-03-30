const { calculate } = require("../Services/calculator")
const { validate } = require("../Constants/index")

//function to check validations and then passing frontend data to services
const validateAndPassToServices = async (req, res) => {
    try {
        let { monthlyInvestment, investmentPeriod, rateOfReturn, delay } = req.query
        monthlyInvestment = parseInt(monthlyInvestment)
        investmentPeriod = parseInt(investmentPeriod)
        //Can have decimal values
        rateOfReturn = parseFloat(rateOfReturn)
        delay = parseInt(delay)

        if (
            monthlyInvestment < validate.MONTHLYINVESTMENTMIN ||
            monthlyInvestment > validate.MONTHLYINVESTMENTMAX
        )
            throw "invalid value of monthly investment"

        if (
            investmentPeriod < validate.INVESTMENTPERIODMIN ||
            investmentPeriod > validate.INVESTMENTPERIODMAX
        )
            throw "invalid value of investment period"


        if (
            rateOfReturn < validate.RATEOFRETURNMIN ||
            rateOfReturn > validate.RATEOFRETURNMAX
        )
            throw "invalid value of rate of return"


        if (
            delay < validate.DELAYMIN ||
            delay > validate.DELAYMAX
        )
            throw "invalid value of delay"

        //passing the validated input data for calculation     
        const calculatedResult = await calculate({ monthlyInvestment, investmentPeriod, rateOfReturn, delay })
        
        res.send({ status: 0, message: "Result Successfull", result: calculatedResult })

    } catch (error) {
        res.send({
            status: -1,
            message: "Something is not good",
            result: error,
        });
    }
};

module.exports = { validateAndPassToServices }
