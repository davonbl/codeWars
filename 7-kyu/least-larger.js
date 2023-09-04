function leastLarger(a, i) {
  let newA = [];
  a.forEach((ele, index, array) => {
    ele > array[i] ? newA.push({ value: ele, index: index }) : null;
  });
  return newA.length > 0 ? newA.sort((a, b) => a.value - b.value)[0].index : -1;
}
git 