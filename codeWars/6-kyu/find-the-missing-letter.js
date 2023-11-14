function findMissingLetter(array) {
  let trackAlpha = "abcdefghijklmnopqrstuvwxyz"; let compareLetter;
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i] === array[i].toUpperCase()) {
      trackAlpha = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
      compareLetter = trackAlpha.indexOf(array[i]);
    } else if (i === 0) {
      compareLetter = trackAlpha.indexOf(array[i]);
    } else {
      compareLetter++;
      if (array[i] !== trackAlpha.charAt(compareLetter)) {
        return (compareLetter = trackAlpha.charAt(compareLetter));
      }
    }
  }
}
