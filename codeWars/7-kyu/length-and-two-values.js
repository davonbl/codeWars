function alternate(n, firstValue, secondValue) {
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    i % 2 === 0 ? newArr.push(secondValue) : newArr.push(firstValue);
  }
  return newArr;
}
