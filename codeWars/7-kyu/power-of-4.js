function powerOf4(n){
    if(typeof n === 'number' && n % 1 === 0){
      let total = Math.log(n) / Math.log(4);
      return total % 1 === 0? true : false;
    }else{
      return false;
    }
  }