function getMean(arr, x, y) {
  let xTotal = 0;
  let yTotal = 0;
  if (x > 1 && y > 1 && x <= arr.length && y <= arr.length) {
    for (let i = 0; i < x; i++) {
      xTotal = xTotal + arr[i];
      i === x - 1 ? (xTotal = xTotal / x) : null;
    }
    let arrReversed = arr.reverse();
    for (let i = 0; i < y; i++) {
      yTotal = yTotal + arrReversed[i];
      i === y - 1 ? (yTotal = yTotal / y) : null;
    }
    let lastTotal = (xTotal + yTotal) / 2;
    return lastTotal;
  } else {
    return -1;
  }
}
