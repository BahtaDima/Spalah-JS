var result = 0;

function sum(arg) {
  result += arg;
  return function sum(arg) {
    result += arg;
  return sum
  }
};

sum(10)(15)(25);

console.log('Результат = ' + result);