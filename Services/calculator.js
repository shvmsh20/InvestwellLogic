  function findAmount(monthlyInvestment, investmentPeriod, rateOfReturn, delay){
    const months = delay ? (investmentPeriod)*12 - delay : (investmentPeriod)*12;
    const rate = (rateOfReturn - 0)/12;
    let sipCumulation = 0;
    let sipGrowthResult = 0;
  
    for(let i=1; i<=months; i++)
    {
      sipCumulation = monthlyInvestment*(Math.pow((1+rate/100),i));
      sipGrowthResult += sipCumulation;
    }
    return sipGrowthResult;
  }
const calculate = async ({monthlyInvestment, investmentPeriod, rateOfReturn, delay})=>{

  try{
    const startToday = findAmount(monthlyInvestment, investmentPeriod, rateOfReturn).toFixed(0);
    const delayedStart = findAmount(monthlyInvestment, investmentPeriod, rateOfReturn, delay).toFixed(0);
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