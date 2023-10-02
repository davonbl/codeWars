function twoSum(numbers, target) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    let keepTotal = numbers[i];
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        if (keepTotal + numbers[j] === target) {
          newArr.push(i, j);
          return newArr;
        }
        j === numbers.length - 1 ? (keepTotal = 0) : null;
      }
    }
  }
}
