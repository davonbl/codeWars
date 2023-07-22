function transposeTwoStrings(array) {
  let word = "";
  let firstStr = array[0].split("");
  let secondStr = array[1].split("");

  if (firstStr.length > secondStr.length) {
    for (let i = 0; i < firstStr.length; i++) {
      if (i !== firstStr.length - 1) {
        firstStr[i] === undefined && secondStr[i] === undefined
          ? (word = word + " " + " " + " " + "\n")
          : firstStr[i] === undefined
          ? (word = word + " " + " " + secondStr[i] + "\n")
          : secondStr[i] === undefined
          ? (word = word + firstStr[i] + " " + " " + "\n")
          : (word = word + firstStr[i] + " " + secondStr[i] + "\n");
      } else {
        firstStr[i] === undefined && secondStr[i] === undefined
          ? (word = word + " " + " " + " ")
          : firstStr[i] === undefined
          ? (word = word + " " + " " + secondStr[i])
          : secondStr[i] === undefined
          ? (word = word + firstStr[i] + " " + " ")
          : (word = word + firstStr[i] + " " + secondStr[i]);
      }
    }
  } else if (secondStr.length > firstStr.length) {
    for (let i = 0; i < secondStr.length; i++) {
      if (i !== secondStr.length - 1) {
        firstStr[i] === undefined && secondStr[i] === undefined
          ? (word = word + " " + " " + " " + "\n")
          : firstStr[i] === undefined
          ? (word = word + " " + " " + secondStr[i] + "\n")
          : secondStr[i] === undefined
          ? (word = word + firstStr[i] + " " + " " + "\n")
          : (word = word + firstStr[i] + " " + secondStr[i] + "\n");
      } else {
        firstStr[i] === undefined && secondStr[i] === undefined
          ? (word = word + " " + " " + " ")
          : firstStr[i] === undefined
          ? (word = word + " " + " " + secondStr[i])
          : secondStr[i] === undefined
          ? (word = word + firstStr[i] + " " + " ")
          : (word = word + firstStr[i] + " " + secondStr[i]);
      }
    }
  } else {
    for (let i = 0; i < firstStr.length; i++) {
      if (i !== firstStr.length - 1) {
        firstStr[i] === undefined && secondStr[i] === undefined
          ? (word = word + " " + " " + " " + "\n")
          : firstStr[i] === undefined
          ? (word = word + " " + " " + secondStr[i] + "\n")
          : secondStr[i] === undefined
          ? (word = word + firstStr[i] + " " + " " + "\n")
          : (word = word + firstStr[i] + " " + secondStr[i] + "\n");
      } else {
        if (firstStr[i] === undefined && secondStr[i] === undefined) {
          word = word + " " + " " + " ";
        } else if (firstStr[i] === undefined) {
          word = word + " " + " " + secondStr[i];
        } else if (secondStr[i] === undefined) {
          word = word + firstStr[i] + " " + " ";
        } else {
          word = word + firstStr[i] + " " + secondStr[i];
        }
      }
    }
  }
  return word;
}
