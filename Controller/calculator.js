const service = require("../Services/calculator");
const validate = require("../Constants/index");
console.log(validate);
const calculate = async (req, res) => {
    try {
        const monthlyInvestment = parseInt(req.query.monthlyInvestment);
        const investmentPeriod = parseInt(req.query.investmentPeriod);
        const rateOfReturn = parseFloat(req.query.rateOfReturn);
        const delay = parseInt(req.query.delay);

        if (
            Number.isNaN(monthlyInvestment) ||
            monthlyInvestment < validate.MONTHLYINVESTMENTMIN ||
            monthlyInvestment > validate.MONTHLYINVESTMENTMAX
        )
            throw new Error("Invalid data entered");

        if (
            Number.isNaN(investmentPeriod) ||
            investmentPeriod < validate.INVESTMENTPERIODMIN ||
            investmentPeriod > validate.INVESTMENTPERIODMAX
        ) 
            throw new Error("Invalid data entered");
        

        if (
            Number.isNaN(rateOfReturn) ||
            rateOfReturn < validate.RATEOFRETURNMIN ||
            rateOfReturn > validate.RATEOFRETURNMAX
        ) 
            throw new Error("Invalid data entered");
        

        if (
            Number.isNaN(delay) ||
            delay < validate.DELAYMIN ||
            delay > validate.DELAYMAX
        ) 
            throw new Error("Invalid data entered");
        

        const result = await service.calculate(req.query);

        if (result instanceof Error) {
            res.send({
                status: -1,
                message: "Something is not good",
                result: result.message,
            });
        } else {
            res.send({ status: 0, message: "Result Successfull", result: result });
        }
    } catch (error) {
        res.send({
            status: -1,
            message: "Something is not good",
            result: error.message,
        });
    }
};

module.exports = { calculate };
