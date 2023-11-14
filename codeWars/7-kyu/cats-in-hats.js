function height(n) {
    let currentHeight = 2000000;
    let addHeight = 2000000;
    if(n !== 0){
      for(let i = 1; i <= n; i++){
        addHeight = (addHeight / (2.5))
        currentHeight = currentHeight + addHeight
      }
    }
    return currentHeight.toFixed(3);
  }