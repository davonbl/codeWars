function oddOrEven(array){
    let total = array.reduce((sum,current) => sum + current, 0)
    return array === [] || total % 2 === 0? 'even' 
      : 'odd'
  }