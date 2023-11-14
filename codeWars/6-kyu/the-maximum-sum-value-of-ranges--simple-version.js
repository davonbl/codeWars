function maxSum(arr, range) {
  let currentValue = 0;
  let compareValue = 0;
  for (let i = 0; i < range.length; i++) {
    let trackRangeNum = range[i][0];
    for (let j = 0; j < range[i].length; j++) {
      if (i === 0) {
        currentValue = currentValue + arr[[trackRangeNum]];
        if (trackRangeNum < range[i][j + 1]) {
          trackRangeNum = trackRangeNum + 1;
          j = j - 1;
        } else {
          j = trackRangeNum;
        }
      } else {
        compareValue = compareValue + arr[[trackRangeNum]];
        if (trackRangeNum < range[i][j + 1]) {
          trackRangeNum = trackRangeNum + 1;
          j = j - 1;
        } else {
          j = trackRangeNum;
        }
        if (j >= range[i].length - 1) {
          compareValue >= currentValue ? (currentValue = compareValue) : null;
          compareValue = 0;
        }
      }
    }
  }
  return currentValue;
}
