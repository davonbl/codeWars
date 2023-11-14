function toWeirdCase(string) {
  let newArr = string.split("");
  for (let i = 0; i < newArr.length; i++) {
    i === 0? newArr[i] = newArr[i].toUpperCase()
      : newArr[i] === " " && i % 2 === 0? newArr.splice(i + 1, 0, " ")
      : i % 2 === 0? newArr[i] = newArr[i].toUpperCase()
      : null;
  }
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === " " && newArr[i + 1] === " ") {
      newArr.splice(i, 1);
      i--;
    }
  }
  return newArr.join("").trim();
}
