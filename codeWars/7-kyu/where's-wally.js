function wheresWally(string) {
    let getAboveOne = string.includes("Wally");
    if (getAboveOne) {
      let newArr = string.split(" ");
      let ifHasLetter = newArr[0].toString().indexOf("y") + 1;
      if (newArr.length > 1) {
        for (let i = 0; i < newArr.length; i++) {
          ifHasLetter = newArr[i].toString().indexOf("y") + 1;
          if (newArr[i].includes("Wally")) {
            if (newArr[i] !== "Wally") {
              let punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
              if (punctuationRegex.test(newArr[i]) && newArr[i][0] === "W") {
                if (newArr[i][0] === "W" && newArr[i].toString().indexOf("y") === 4){
                  break;
                } else {
                  continue;
                }
              }
              if (
                newArr[i].charAt(newArr[i].length - 1) !== "y" ||
                /[a-zA-Z]/.test(newArr[i][ifHasLetter]) ||
                newArr[i].charAt(0) !== "W"
              ) {
                let newWord = "a";
                for (let j = 0; j < newArr[i].length - 1; j++) {
                  newWord = newWord + "a";
                }
                newArr[i] = newArr[i].replaceAll(newArr[i], newWord);
              }
            }
          }
        }
        return newArr.join(" ").indexOf("Wally");
      } else {
        if (/[a-zA-Z]/.test(newArr[0].charAt(ifHasLetter)) === false && 
            newArr[0].charAt(0) === "W"
           ) {
          return newArr[0].indexOf("Wally");
        } else {
          return -1;
        }
      }
    } else {
      return -1;
    }
  }