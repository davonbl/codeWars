function switcher(x) {
  let getAlphaNChar = "?!abcdefghijklmnopqrstuvwxyz-".split("").reverse();
  getAlphaNChar.push(" ");
  let newArr = [];
  x.forEach((ele) => newArr.push(getAlphaNChar.join("").charAt(Number(ele))));
  return newArr.join("");
}
