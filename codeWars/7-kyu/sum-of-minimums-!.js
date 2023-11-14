function sumOfMinimums(arr) {
  let total = 0;
  arr.forEach((ele, i) => {
    let lowNum = 0;
    for (let j = 0; j < ele.length; j++) {
      if (j === 0) {
        lowNum = arr[i][j];
      } else {
        lowNum > arr[i][j] ? (lowNum = arr[i][j]) : null;
        j === arr[i].length - 1 ? (total = total + lowNum) : null;
      }
    }
  });
  return total;
}
