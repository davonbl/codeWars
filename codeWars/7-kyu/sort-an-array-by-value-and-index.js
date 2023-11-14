function sortByValueAndIndex(array) {
  let newA = array.map((ele, i) => ({
    originalNum: ele,
    newNum: ele * (i + 1)
  }));
  newA.sort((a, b) => a.newNum - b.newNum);
  return (array = newA.map((ele) => ele.originalNum));
}
