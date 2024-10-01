console.log('Test');

const lonelyInteger = (numbers: number[]): number => {
  const numberDetails: { [key: string]: number } = {};

  numbers.forEach(value => {
    numberDetails[value] = numberDetails[value] === undefined ? 1 : numberDetails[value] + 1;
  });

  return Object.keys(numberDetails).find(key => numberDetails[key] === 1) as unknown as number;
};


console.log({ lonelyInteger: lonelyInteger([1, 2, 3, 4, 3, 2, 1]) });