function allNonConsecutive(arr) {
  let arrObj = [];
  for (let i = 0; i < arr.length; i++) {
    let addObj = {};
    if (i !== 0) {
      if (arr[i] !== arr[i - 1] + 1) {
        addObj["i"] = i;
        addObj["n"] = arr[i];
        arrObj.push(addObj);
      }
    }
  }
  return arrObj;
}
