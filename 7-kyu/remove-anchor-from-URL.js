function removeUrlAnchor(url) {
  let arr = url.split("");

  arr.forEach((ele, i) => (ele === "#" ? arr.splice(i, arr.length - i) : null));
  
  return arr.join("");
}
