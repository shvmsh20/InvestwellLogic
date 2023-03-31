const { calculate } = require('../Services/calculator')
const { VALIDATE } = require('../Constants/index')

//function to check validations and then passing frontend data to services
const getSipDelayCalculatedData = async (request, response) => {
    try {
        let { monthlyInvestment, investmentPeriod, rateOfReturn, delay } = request.query
        monthlyInvestment = parseInt(monthlyInvestment)
        investmentPeriod = parseInt(investmentPeriod)
        //Can have decimal values
        rateOfReturn = parseFloat(rateOfReturn)
        delay = parseInt(delay)
        if(monthlyInvestment < VALIDATE.MONTHLY_INVESTMENT_MIN || monthlyInvestment > VALIDATE.MONTHLY_INVESTMENT_MAX)
            throw 'invalid value of monthly investment'
        if(investmentPeriod < VALIDATE.IP_AND_ROR_MIN || investmentPeriod > VALIDATE.IP_AND_ROR_MAX)
            throw 'invalid value of investment period'
        if(rateOfReturn < VALIDATE.IP_AND_ROR_MIN || rateOfReturn > VALIDATE.IP_AND_ROR_MAX)
            throw 'invalid value of rate of return'
        if(delay < VALIDATE.DELAY_MIN || delay > VALIDATE.DELAY_MAX)
            throw 'invalid value of delay'
        //passing the validated input data for calculation     
        const graphData = await calculate({ monthlyInvestment, investmentPeriod, rateOfReturn, delay })
        response.send({
            status: 0, 
            message: 'Result Successfull', 
            result: graphData 
        })
    } catch (error) {
        response.send({
            status: -1,
            message: 'Something is not good',
            result: error
        })
    }
}

module.exports = { 
    getSipDelayCalculatedData 
}
