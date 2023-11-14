function solution(number) {
  let numArr = [];
  let total = 0;
  if (number > 0) {
    for (let i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        !numArr.includes(i) ? numArr.push(i) : null;
      } else if (i % 3 === 0) {
        numArr.push(i);
      } else if (i % 5 === 0) {
        numArr.push(i);
      }
    }
    numArr.forEach((ele) => (total = total + ele));
  }
  return total;
}
