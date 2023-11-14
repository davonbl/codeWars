function battle(x, y) {
  let alpha = "-ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let getX = x.split("");
  let getXScore = 0;
  let getY = y.split("");
  let getYScore = 0;
  getX.forEach((ele) => {
    alpha.includes(ele) ? (getXScore = getXScore + alpha.indexOf(ele)) : null;
  });
  getY.forEach((ele) => {
    alpha.includes(ele) ? (getYScore = getYScore + alpha.indexOf(ele)) : null;
  });
  return getYScore === getXScore ? "Tie!" : getYScore > getXScore ? y : x;
}
