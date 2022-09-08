const hourglassSum = (arr) => {
  let maxValue = null;

  for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= 4; j++) {
      const hourglass =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];

      if (maxValue === null) {
        maxValue = hourglass;
        continue;
      }
      maxValue = hourglass > maxValue ? hourglass : maxValue;
    }
  }
  return maxValue;
};

console.log(
  hourglassSum([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5],
  ])
);
