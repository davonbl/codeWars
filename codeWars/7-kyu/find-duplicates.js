function duplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        if (arr[i] === arr[j]) {
          !newArr.includes(arr[i]) ? (newArr[j] = arr[i]) : null;
        }
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    newArr[i] === undefined ? newArr.splice(i, 1) && i-- : null;
  }
  return newArr;
}
