function bingo(a) {
  let newArr = [];
  let getLetters = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < a.length; i++) {
    if (
      getLetters.indexOf("B") === a[i] ||
      getLetters.indexOf("I") === a[i] ||
      getLetters.indexOf("N") === a[i] ||
      getLetters.indexOf("G") === a[i] ||
      getLetters.indexOf("O") === a[i]
    ) {
      !newArr.includes("B") ||
      !newArr.includes("I") ||
      !newArr.includes("N") ||
      !newArr.includes("G") ||
      !newArr.includes("O")
        ? newArr.push(getLetters.at(a[i]))
        : null;
    }
  }
  return newArr.includes("B") &&
    newArr.includes("I") &&
    newArr.includes("N") &&
    newArr.includes("G") &&
    newArr.includes("O")
    ? "WIN"
    : "LOSE";
}
