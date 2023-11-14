function pipeFix(numbers) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let keepCount = numbers[i - 1];
    let addNum = numbers[i - 1] + 1;
    if (i !== 0) {
      if (keepCount + 1 !== numbers[i]) {
        while (keepCount + 1 !== numbers[i]) {
          newArr.push(addNum);
          addNum++
          keepCount++
        }
      }
    }
    newArr.push(numbers[i])
  }
  return newArr;
}