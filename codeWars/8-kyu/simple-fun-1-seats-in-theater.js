function seatsInTheater(nCols, nRows, col, row) {
    let newCol = nCols - col + 1;
    let newRow = nRows - row;
    return newCol * newRow;
  }