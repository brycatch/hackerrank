const rotLeft = (a, d) => {
  for (let i = 0; i < d; i++) a.push(a.splice(0, 1)[0]);
  return a;
};

console.log(rotLeft([1, 2, 3, 4, 5], 4));
