console.log('Test');

const numbers = {
  positive: 0,
  negative: 0,
  zeros: 0
};


const arr = [-4, 3, -9, 0, 4, 1];

arr.forEach(element => {
  numbers.positive += element > 0 ? 1 : 0;
  numbers.negative += element < 0 ? 1 : 0;
  numbers.zeros += element === 0 ? 1 : 0;
});

const ratios = {
  positive: (numbers.positive / arr.length).toFixed(6),
  negative: (numbers.negative / arr.length).toFixed(6),
  zeros: (numbers.zeros / arr.length).toFixed(6),
};


console.log({ numbers, ratios });