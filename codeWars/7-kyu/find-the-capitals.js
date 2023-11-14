let capitals = function (word) {
  let newArr = [];
  word.split("").forEach((ele, index) => {
    if (ele !== ele.toLowerCase()) {
      newArr.push(index);
    }
  });
  return newArr;
};
