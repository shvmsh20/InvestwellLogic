const {MONTHSINYEAR, HUNDRED} = require("../Constants/index")

//calculate the amount when delay is introduced
const findAmountWithDelay = (options)=>{
  const months = (options.investmentPeriod)*MONTHSINYEAR - options.delay
  const rate = (options.rateOfReturn)/MONTHSINYEAR
  let sipCumulation = 0
  let sipGrowthResult = 0
  for(let i=1; i<=months; i++)
  {
    sipCumulation = options.monthlyInvestment*(Math.pow((1+rate/HUNDRED),i));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult
}

//calculate the amount when there is no delay  
const findAmountWithoutDelay = (options)=>{
  const months = (options.investmentPeriod)*12
  const rate = (options.rateOfReturn)/12
  let sipCumulation = 0
  let sipGrowthResult = 0
  for(let i=1; i<=months; i++)
  {
    sipCumulation = options.monthlyInvestment*(Math.pow((1+rate/100),i))
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