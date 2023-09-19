function maxAndMin(arr1, arr2) {
  let twoValues = [];
  let maxNum;
  let minNum;
  let compareMin;
  let compareMax;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (maxNum !== undefined && minNum !== undefined) {
        compareMin = arr1[i] - arr2[j];
        compareMax = arr1[i] - arr2[j];
        if (compareMax >= 0 && compareMin >= 0) {
          compareMax > maxNum ? (maxNum = compareMax) : null;
          compareMin < minNum ? (minNum = compareMax) : null;
        } else {
          continue;
        }
      } else {
        maxNum = arr1[i] - arr2[j];
        minNum = arr1[i] - arr2[j];
        if (maxNum >= 0 && minNum >= 0) {
          continue;
        } else {
          maxNum = undefined;
          minNum = undefined;
        }
      }
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (maxNum !== undefined && minNum !== undefined) {
        compareMin = arr2[i] - arr1[j];
        compareMax = arr2[i] - arr1[j];
        if (compareMax >= 0 && compareMin >= 0) {
          compareMax > maxNum ? (maxNum = compareMax) : null;
          compareMin < minNum ? (minNum = compareMax) : null;
        } else {
          continue;
        }
      } else {
        maxNum = arr2[j] - arr1[j];
        minNum = arr2[i] - arr1[j];
        if (maxNum >= 0 && minNum >= 0) {
          continue;
        } else {
          maxNum = undefined;
          minNum = undefined;
        }
      }
    }
    if (i === arr2.length - 1) {
      twoValues.push(maxNum, minNum);
      return twoValues;
    }
  }
}
