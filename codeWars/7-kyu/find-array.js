function findArray(arr1, arr2){
    let newArr = [];
    arr2.forEach((element) => {
      arr1.forEach((ele,index, arr) => {
        index === element? newArr.push(ele): null;
      })
    })
    return newArr;
  };