export const solve = (x, y) => {

  // invalid input
  if( isNaN(x) || isNaN(y) ) {
    return null;
  }

  // x^2 + y^2 = r^2
  const sum = Math.pow(x, 2) + Math.pow(y, 2);

  const board = [
    { // inner circle
      radius: 1,
      points: 10
    },
    { // middle circle
      radius: 5,
      points: 5
    },
    { // outer circle
      radius: 10,
      points: 1
  }];

  // check each circle
  for(let i = 0; i < board.length; i += 1) {
    let circle = board[i];
    if(sum <= Math.pow(circle.radius, 2)) {
      return circle.points;
    }
  }
  // outside the board
  return 0;

};
