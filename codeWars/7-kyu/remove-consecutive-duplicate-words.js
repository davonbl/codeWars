function removeConsecutiveDuplicates(string) {
    let convertToArr = string.split(' ');
    for(let i=0; i < convertToArr.length; i++){
      for(let j=0; j < convertToArr.length; j++){
          if(i > j){
            continue; 
          }else{
            if(convertToArr[i] === convertToArr[j] && convertToArr[j] === convertToArr[j + 1]){
              convertToArr.splice((j + 1), 1);
              j--;
              i--;
            }
          }
      }
    }
    return convertToArr.join(' ');
  }