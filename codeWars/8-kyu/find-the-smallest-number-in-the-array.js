class SmallestIntegerFinder {
    findSmallestInt(args){
      let smallNum;
      for(let i=0; i < args.length; i++){
        if(i !== 0){
            if(args[i] < smallNum){
              smallNum = args[i];
            }    
        }else{
          smallNum = args[i];
        }
      }
      return smallNum
    }
  }