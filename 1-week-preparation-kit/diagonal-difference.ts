console.log('test');

const diagonalDifference = (matrix: number[][]): number => {
  let leftDiagonal: number = 0;
  let rightDiagonal: number = 0;

  for (let i = 0; i < matrix.length; i++) {
    leftDiagonal += matrix[i][i];
    rightDiagonal += matrix[i][matrix.length - i - 1];
  }
  return Math.abs(leftDiagonal - rightDiagonal);
};

const matrix =
  [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
  ];


const matrix2 =
  [
    [11, 2, 4, 3],
    [4, 5, 6, 0],
    [10, 8, -12, 28],
    [1, 2, 3, 8]
  ];


console.log('3');
console.log(diagonalDifference(matrix));
console.log('4');
console.log(diagonalDifference(matrix2));