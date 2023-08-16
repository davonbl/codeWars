function consecutive(arr) {
  if (arr.length >= 2) {
    let newArr = [];
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i + 1] - 1 && i !== arr.length - 1) {
        arr.splice(i + 1, 0, arr[i] + 1);
        newArr.push(arr[i] + 1);
        i = i - 1;
      }
      if (i === arr.length - 1) {
        return newArr.length;
      }
    }
  } else {
    return 0;
  }
}
