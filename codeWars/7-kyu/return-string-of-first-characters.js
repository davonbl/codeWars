function makeString(s){
    let newArr = [];
    let convertStr = s.split('')
    for(let i =0; i < convertStr.length; i++){
      if(i === 0 || convertStr[i - 1] === ' '){
        newArr.push(convertStr[i])
      }
    }
    return newArr.join('')
  }