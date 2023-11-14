function theVar(theVariables) {
  let letters = "-abcdefghijklmnopqrstuvwxyz";
  let firstLetter = theVariables[0];
  let secondLetter = theVariables[2];
  if (theVariables[1] === "+") {
    letters.includes(firstLetter)? firstLetter = letters.indexOf(firstLetter): null;
    letters.includes(secondLetter)? secondLetter = letters.indexOf(secondLetter): null;
    return firstLetter + secondLetter;
  }
}
