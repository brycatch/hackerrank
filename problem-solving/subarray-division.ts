function birthday(chocolate: number[], day: number, length: number): number {
  let segmentsCount = 0;

  for (let i = 0; i < chocolate.length; i++) {
    const segment = chocolate.slice(i, i + length);
    const toBeShared =
      segment.length === length &&
      segment.reduce((item, acc) => item + acc, 0) === day;

    if (toBeShared) {
      segmentsCount++;
    }
  }

  return segmentsCount;
}


console.log({ birthday: birthday([1, 2, 1, 3, 2], 3, 2) });
console.log({ birthday: birthday([1, 1, 1, 1, 1], 3, 2) });
console.log({ birthday: birthday([4], 4, 1) });
console.log({ birthday: birthday([4], 4, 1) });
