function strCount(str, letter){  
    let occurrences = []
    let arr = str.split('')
    arr.forEach((ele) => {
        if(ele === letter){
          occurrences.push(letter)
        }
      })
    return occurrences.length
  }