function findAverage(array){
    let avg = 0;
    if(array.length === 0){
      return 0;  
    }else{
      array.forEach(ele => avg = avg + ele)
      return avg / array.length
    } 
  }