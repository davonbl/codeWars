function sortArray(a1, a2) {
    let newArr = [];
    for(let i = 0; i < a1.length; i++){
      for(let j = 0; j < a2.length; j++){
        if(a1[i][0] === a2[j][0]){
          newArr.push(a2[j]);
        }
      }
    }
    return newArr;
  }