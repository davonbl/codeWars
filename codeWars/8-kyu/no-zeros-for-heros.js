function noBoringZeros(n) {
    let newNum;
    let strNum = n.toString().split('').reverse()
    for(let i = 0; i < strNum.length; i++){
      if(strNum.length > 1){
        if(Number(strNum.indexOf('0')) === 0){
          strNum.shift()
          i--
        }
      }
    }
    newNum = Number(strNum.reverse().join(''));
    return newNum
  
  }