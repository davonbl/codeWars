function sumDigits(number) {
    let arr = number.toString().split('')
    let total = 0;
    arr.forEach((ele) => {
      if(Number(ele)){
        total = total + Number(ele)
      }
    })
    return total
  }
  