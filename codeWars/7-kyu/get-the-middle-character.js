function getMiddle(s){
    let strToArr = s.split('')
    let newArr = []
    for(let i =0; i <= strToArr.length; i++){
      if(strToArr.length % 2 === 0){
        let trackNum = strToArr.length / 2
        if(i === (trackNum - 1)){
          newArr.push(strToArr[i])
          newArr.push(strToArr[i + 1])
        }
      }else{
        let trackNum = (strToArr.length + 1) / 2
        if(i === (trackNum - 1)){
          newArr.push(strToArr[i])
        }
      }
    }
    return newArr.join('')
  }