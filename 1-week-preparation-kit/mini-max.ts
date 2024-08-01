
function miniMax() {
  const arr = [3, 1, 9, 7, 5];
  arr.sort((a, b) => a - b);
  const firstTotal = arr.slice(0, 4).reduce((a, b) => a + b, 0);
  const lastTotal = arr.slice(arr.length - 4, arr.length).reduce((a, b) => a + b, 0);
  console.log(`${firstTotal} ${lastTotal}`);
}


miniMax();
