  function findAmount(monthlyInvestment, investmentPeriod, rateOfReturn, delay){
    let Months = delay ? (investmentPeriod)*12 - delay : (investmentPeriod)*12;
    let Rate = (rateOfReturn - 0)/12;
    let sipCumulation = 0;
    let sipGrowthResult = 0;
  
    for(let i=1; i<=Months; i++)
    {
      sipCumulation = monthlyInvestment*(Math.pow((1+Rate/100),i));
      sipGrowthResult += sipCumulation;
    }
    return sipGrowthResult;
  }
const calculate = async (obj)=>{

  try{
    const startToday = findAmount(obj.monthlyInvestment, obj.investmentPeriod, obj.rateOfReturn).toFixed(0);
    const delayedStart = findAmount(obj.monthlyInvestment, obj.investmentPeriod, obj.rateOfReturn, obj.delay).toFixed(0);
    const notionalLoss = (startToday - delayedStart);
    return {
        startToday,
        delayedStart,
        notionalLoss
        }
    
  }catch(error){
    return error;
  }
    

}

module.exports = {calculate};