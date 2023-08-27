String.prototype.camelCase = function () {
  let newArr = this.split("");
  newArr.forEach((ele, i, newArr) => {
    i === 0? (newArr[i] = newArr[i].toUpperCase())
      : ele === " "? (newArr[i + 1] = newArr[i + 1].toUpperCase())
      : null;
  });
  return newArr.join("").replaceAll(" ", "");
};
