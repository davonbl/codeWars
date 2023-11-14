function min(arr, toReturn) {
  let leastIndex;
  let leastValue;
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      if (leastValue < arr[i]) {
      } else {
        leastValue = arr[i];
        leastIndex = i;
      }
    } else {
      if (arr[i] < arr[i + 1] && i !== arr.length - 1 - 1) {
        leastValue = arr[i];
        leastIndex = i;
      } else {
        leastValue = arr[i + 1];
        leastIndex = i + 1;
      }
    }
  }
  return toReturn === "value" ? leastValue : leastIndex;
}
