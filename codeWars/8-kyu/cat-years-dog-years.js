let humanYearsCatYearsDogYears = function(humanYears) {
  let catYears;
  let dogYears;
  let loopHumanYears = humanYears - 2
  if(humanYears >= 1 && Number.isInteger(humanYears)){
    if(humanYears === 1){
        catYears = 15
      } else if(humanYears === 2){
        catYears = 24
      } else{
        catYears = 24
        for(let i = 0; i < loopHumanYears; i++){
          catYears = catYears + 4
        }
      }
    
    if(humanYears === 1){
      dogYears = 15
    } else if(humanYears === 2){
      dogYears = 24
    } else{
      dogYears = 24
      for(let i =0; i < loopHumanYears; i++){
        dogYears = dogYears + 5
      }
    }
      
    
  }
  
  return [humanYears,catYears, dogYears];
}