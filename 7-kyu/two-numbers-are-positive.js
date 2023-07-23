const twoArePositive = (a, b, c ) => {
    let newArr = [a, b, c];
    let keepCount = 0;
    newArr.forEach((ele)=> {
      if(ele > 0){
        keepCount++;
      };
    });
    return keepCount === 2? true: false;
  };