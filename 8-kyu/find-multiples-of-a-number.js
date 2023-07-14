function findMultiples(integer, limit) {
    let multiArr = []
    for(let i =1; i <=limit ; i++){
      if( (integer * i) % i === 0 && (integer * i) <= limit){
        multiArr.push((integer * i))
      }
    }
    return multiArr
  }
  