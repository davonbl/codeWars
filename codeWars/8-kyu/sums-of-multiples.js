function sumMul(n,m){
      let sum = 0;
      let addNum = 1;
      if( m <= 0 || n <= 0) {
        return "INVALID";
      }else{
        for(let i = 1; i < m; i++){
          if((n * i) < m){
            addNum = n * i
            sum = sum + addNum
          }
        }
        return sum; 
      }
    }