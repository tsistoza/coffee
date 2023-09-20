const getAverageAgtron = (coffeeBeans) => {
  const sum = _.reduce(coffeeBeans, (memo, num) => memo + num);
  return sum / coffeeBeans.length;
};

const getRoast = (coffeeBeans) => {
  const avg = getAverageAgtron(coffeeBeans);
  if (avg >= 60 && avg <= 70) { return 'Light'; }
  if (avg >= 45 && avg <= 59) { return 'Medium'; }
  if (avg >= 30 && avg <= 44) { return 'Dark'; }
  return 'Unrecognized coffee';
};

const coffeeBeans = [60, 59, 45, 44, 30];
console.log(getAverageAgtron(coffeeBeans)); // prints 47.6
console.log(getRoast(coffeeBeans)); // prints "medium"
