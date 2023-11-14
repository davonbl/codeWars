function getAverage(marks){
    let total = marks.reduce((sum, current) => sum + current, 0);
    return Math.floor(total / marks.length);
  }