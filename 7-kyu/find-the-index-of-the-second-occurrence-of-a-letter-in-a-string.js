function secondSymbol(s, symbol) {
    let keepCount = 0;
    let keepTrackOfIndex = 0;
    let convertS = s.split("");
    for (let i = 0; i < convertS.length; i++) {
      if (symbol === convertS[i]) {
        keepCount++;
        keepTrackOfIndex = i;
        if (keepCount === 2) {
          return keepTrackOfIndex;
        }
      }
    }
    return -1;
  }
  