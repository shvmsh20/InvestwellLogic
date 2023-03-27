const service = require("../Services/calculator")
const consts = require("../Constants/index")


const calculate = async (req, res)=>{

    try{

        const isValid = (request) => {
            
            const monthlyInvestment = parseInt(request.monthlyInvestment);
            const investmentPeriod = parseInt(request.investmentPeriod);
            const rateOfReturn = parseInt(request.rateOfReturn);
            const delay = parseInt(request.delay);

            if(Number.isNaN(monthlyInvestment) || monthlyInvestment<consts.monthlyInvestmentMin || monthlyInvestment>consts.monthlyInvestmentMax)
                throw new Error("Invalid data entered")
            

            if(Number.isNaN(investmentPeriod) || investmentPeriod<consts.investmentPeriodMin || investmentPeriod>consts.investmentPeriodMax){
                throw new Error("Invalid data entered")
            }

            if(Number.isNaN(rateOfReturn) || rateOfReturn<consts.rateOfReturnMin || rateOfReturn>consts.rateOfReturnMax){
                throw new Error("Invalid data entered")
            }

            if(Number.isNaN(delay) || delay<consts.delayMin || delay>consts.delayMax){
                throw new Error("Invalid data entered")
            }
        
            return true;
        }

    

        isValid(req.query)
        
        const result = await service.calculate(req.query);

        if(result instanceof Error){
            res.send({status: -1, message: "Something is not good", result:result.message})
        }else{
            res.send({status: 0, message: "Result Successfull", result:result})
        }
        

    }catch(error){

        res.send({status: -1, message: "Something is not good", result:error.message})

    }
    
}

module.exports = {calculate};