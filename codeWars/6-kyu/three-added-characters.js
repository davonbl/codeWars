function addedChar(s1, s2) {
  let loopStr1 = s1.split("");
  let sliceStr2 = s2.split("");
  for (let i = 0; i < loopStr1.length; i++) {
    for (let j = 0; j < sliceStr2.length; j++) {
      if (sliceStr2[j] === loopStr1[i]) {
        i++;
        sliceStr2.splice(j, 1);
        j = -1;
      }
    }
  }
  return sliceStr2[0];
}
