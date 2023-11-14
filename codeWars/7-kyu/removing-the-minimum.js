function removeSmallest(numbers) {
  let copy = [...numbers];
  let keepCount = 0;
  if (copy.length > 1) {
    for (let i = 0; i < copy.length; i++) {
      for (let j = 0; j < copy.length; j++) {
        if (copy[i] <= copy[j] && i !== j) {
          keepCount++;
        }
        if (j === copy.length - 1 && keepCount === copy.length - 1) {
          copy.splice(i, 1);
          return copy;
        } else if (j === copy.length - 1) {
          keepCount = 0;
        }
      }
    }
  } else {
    if (numbers.length === 0) {
      return copy;
    }
    copy.splice(0, 1);
    return copy;
  }
}
