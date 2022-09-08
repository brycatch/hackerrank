const minimumBribes = (q) => {
  let countMovements = 0;
  let movementsLeft = 2;
  let lastIndex = -1;
  let movementNotFinished = false;
  let makingChange = false;

  for (let i = 0; i < q.length; i++) {
    console.log(q);
    console.log(q[i], i, lastIndex);
    if (q[i] !== i + 1) {
      let aux = q[i];
      q[i] = q[i + 1];
      q[i + 1] = aux;
      countMovements += 1;
      movementsLeft -= 1;
      if (movementsLeft < 0) {
        console.log("Too chaotic");
        break;
      }

      if (!movementNotFinished) {
        movementNotFinished = true;
        lastIndex = i;
      }
    } else if (movementNotFinished) {
      movementsLeft = 2;
      movementNotFinished = false;
      i = lastIndex;
      lastIndex = -1;
    }
  }
  console.log(q);
  return countMovements;
};

// console.log(minimumBribes([2, 1, 5, 3, 4]));
// console.log(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]));
console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
