const {MONTHS_IN_YEAR, PERCENTAGE} = require('../Constants/index')

//calculate the amount when there is delay or no delay
const _findAmount = (options, delay)=>{
  const months = (options.investmentPeriod)*MONTHS_IN_YEAR - (delay ? options.delay : 0);
  const rate = (options.rateOfReturn)/MONTHS_IN_YEAR 
  let sipCumulation = 0
  let sipGrowthResult = 0
  for(let currentMonth=1; currentMonth<=months; currentMonth++)
  {
    sipCumulation = options.monthlyInvestment*(Math.pow((1+rate/PERCENTAGE),currentMonth));
    sipGrowthResult += sipCumulation;
  }
  return sipGrowthResult
}

const calculate = async (obj)=>{
  try{
    const startToday = Math.round(_findAmount(obj, false))
    const delayedStart = Math.round(_findAmount(obj, true))
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

module.exports = {
  calculate
}