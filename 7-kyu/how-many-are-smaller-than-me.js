function smaller(nums) {
    let newArr = []
    let countNums = 0;
    for(let i = 0; i < nums.length; i++){
      for(let j = 0; j < nums.length; j++){
        if(j > i){
            if(nums[i] > nums[j]){
              countNums = countNums + 1
            }
          }
        if(j === nums.length - 1){
            newArr.push(countNums);
            countNums = 0;
        }
      }
    }
    return newArr
  }