function solution(number) {
  let arr = [0, 0, 0];
  arr.forEach((ele, i) => {
    for (j = 1; j < number; j++) {
      if (i === 0) {
        j % 3 === 0 && j % 5 !== 0 ? (arr[i] = arr[i] + 1) : null;
      } else if (i === 1) {
        j % 5 === 0 && j % 3 !== 0 ? (arr[i] = arr[i] + 1) : null;
      } else {
        j % 3 === 0 && j % 5 === 0 ? (arr[i] = arr[i] + 1) : null;
      }
    }
  });
  return arr;
}
