function solve(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = arr.length - 1; j >= 0; j--) {
      if (i !== j) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
          j++;
          i++;
        }
      }
    }
  }
  return arr;
}
