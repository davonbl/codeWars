function fakeBin(x){
    let convertToArr = x.split('')
    let newArr = [];
    for(let i = 0; i < convertToArr.length; i++){
      if(Number(convertToArr[i]) < 5){
        newArr.push(0)
      }else{
        newArr.push(1)
      }
    }
    return newArr.join('')
  }