let getMilitaryTime = input => {
    let minAndSeconds = input.split('').slice(2, (input.length - 2)).join('')
    let checkHour = input.split('').slice(0, 2).join('')   
    if(input.includes('AM')){
      if(checkHour == 12){
        checkHour = (Number(checkHour) - 12) + '0';
      }
      return checkHour + minAndSeconds
    }else{   
        if(checkHour < 12){
          checkHour = Number(checkHour) + 12;
        }
        return checkHour + minAndSeconds
      }
  };