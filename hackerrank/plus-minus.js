// Complete the plusMinus function below.
function plusMinus(arr) {
  const length = arr.length;
  const positive = arr.filter((i) => i > 0).length;
  const negative = arr.filter((i) => i < 0).length;
  const zero = arr.filter((i) => i == 0).length;

  console.log(Number.parseFloat(positive / length).toFixed(6));
  console.log(Number.parseFloat(negative / length).toFixed(6));
  console.log(Number.parseFloat(zero / length).toFixed(6));
}

const arr = [-4, 3, -9, 0, 4, 1];

console.log(plusMinus(arr));

/* 
  https://www.hackerrank.com/challenges/plus-minus/problem
  You must print the following lines:
  A decimal representing of the fraction of positive numbers in the array compared to its size.
  A decimal representing of the fraction of negative numbers in the array compared to its size.
  A decimal representing of the fraction of zeros in the array compared to its size.
*/
