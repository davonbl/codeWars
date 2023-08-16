const sumSquareEvenRootOdd = ns => {
    let newArr = [];
    ns.forEach(ele => {
      ele % 2 === 0? newArr.push(Math.pow(ele, 2)): newArr.push(Math.sqrt(ele));
    });
    let sum = newArr.reduce((sum, current) => sum + current, 0);
    return Number(sum.toFixed(2));
  };