function solution(str, ending) {
  let keepCount = 0;
  let strArr = str.split("");
  let endingArr = ending.split("");
  if (strArr.length >= ending.length) {
    strArr.splice(0, strArr.length - endingArr.length);
  }
  endingArr.forEach((ele, index) => {
    ele === strArr[index] ? keepCount++ : null;
  });
  return keepCount === endingArr.length ? true : false;
}
