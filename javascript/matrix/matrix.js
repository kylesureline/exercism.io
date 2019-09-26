export class Matrix {
  constructor(string) {
    this.array = string.split('\n').map((row) => row.split(' ').map((str) => Number(str)));
  }

  get rows() {
    return this.array;
  }

  get columns() {
    const rows = this.array.length;
    const cols = this.array[0].length;
    const grid = [];
    for (let row = 0; row < cols; row++) {
      grid[row] = Array(rows);
    }
    console.log(grid);
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        grid[col][row] = this.array[row][col];
      }
    }
    return grid;
  }
}
