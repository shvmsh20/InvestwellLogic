const {MONTHSINAYEAR, HUNDRED} = require("../Constants/index")

//calculate the amount when delay is introduced
const findAmountWithDelay = (options)=>{
  const months = (options.investmentPeriod)*MONTHSINAYEAR - options.delay
  const rate = (options.rateOfReturn)/MONTHSINAYEAR
  let sipCumulation = 0
  let sipGrowthResult = 0
  for(let currentMonth=1; currentMonth<=months; currentMonth++)
  {
    sipCumulation = options.monthlyInvestment*(Math.pow((1+rate/HUNDRED),currentMonth));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult
}

//calculate the amount when there is no delay  
const findAmountWithoutDelay = (options)=>{
  const months = (options.investmentPeriod)*MONTHSINAYEAR
  const rate = (options.rateOfReturn)/MONTHSINAYEAR
  let sipCumulation = 0
  let sipGrowthResult = 0
  for(let currentMonth=1; currentMonth<=months; currentMonth++)
  {
    sipCumulation = options.monthlyInvestment*(Math.pow((1+rate/HUNDRED),currentMonth))
    sipGrowthResult += sipCumulation
  }
  return sipGrowthResult
}

const calculate = async (obj)=>{
  try{
    const startToday = findAmountWithoutDelay(obj).toFixed(0)
    const delayedStart = findAmountWithDelay(obj).toFixed(0)
    const notionalLoss = (startToday - delayedStart)
    return {
        startToday,
        delayedStart,
        notionalLoss
        }
    
  }catch(error){
    throw error
  }
}

module.exports = {calculate}