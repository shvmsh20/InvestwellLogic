const service = require("../Services/calculator");
const consts = require("../Constants/index");

const calculate = async (req, res) => {
    try {
        const monthlyInvestment = parseInt(req.query.monthlyInvestment);
        const investmentPeriod = parseInt(req.query.investmentPeriod);
        const rateOfReturn = parseInt(req.query.rateOfReturn);
        const delay = parseInt(req.query.delay);

        if (
            Number.isNaN(monthlyInvestment) ||
            monthlyInvestment < consts.monthlyInvestmentMin ||
            monthlyInvestment > consts.monthlyInvestmentMax
        )
            throw new Error("Invalid data entered");

        if (
            Number.isNaN(investmentPeriod) ||
            investmentPeriod < consts.investmentPeriodMin ||
            investmentPeriod > consts.investmentPeriodMax
        ) 
            throw new Error("Invalid data entered");
        

        if (
            Number.isNaN(rateOfReturn) ||
            rateOfReturn < consts.rateOfReturnMin ||
            rateOfReturn > consts.rateOfReturnMax
        ) 
            throw new Error("Invalid data entered");
        

        if (
            Number.isNaN(delay) ||
            delay < consts.delayMin ||
            delay > consts.delayMax
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
