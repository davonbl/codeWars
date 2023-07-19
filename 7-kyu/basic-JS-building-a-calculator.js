let Calculator = {
    add: (a,b) => {
      if(!isNaN(a) && !isNaN(b)){
        return a + b;
      }
    },
    subtract: (a,b) => {
      if(!isNaN(a) && !isNaN(b)){
        return a - b;
      }
    },
    multiply: (a,b) => {
      if(!isNaN(a) && !isNaN(b)){
        return a * b;
      }
    }, 
    divide: (a,b) => {
      if(!isNaN(a) && !isNaN(b)){
        if(b !== 0){
          return a / b; 
        }
        return false
      }
    }
  };
  
  