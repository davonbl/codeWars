function battle(x, y) {
    let getUpperCase = '-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let getLowerCase = getUpperCase.toLowerCase();
    let getXScore = 0;
    let getYScore = 0;
    for(let i = 0; i < x.length; i++){
      getUpperCase.includes(x[i])? getXScore = getXScore + getUpperCase.indexOf(x[i])
        : null;
      getLowerCase.includes(x[i])? getXScore = getXScore + (getLowerCase.indexOf(x[i]) / 2 )
        : null;
    }
    for(let i = 0; i < y.length; i++){
       getUpperCase.includes(y[i])? getYScore = getYScore + getUpperCase.indexOf(y[i])
        : null;
       getLowerCase.includes(y[i])? getYScore = getYScore + (getLowerCase.indexOf(y[i]) / 2 )
        : null;
    }
    return getXScore === getYScore? 'Tie!': getXScore > getYScore? x: y;
  }