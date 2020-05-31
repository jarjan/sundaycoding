// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(arr) {
  const max = Math.max(...arr);
  const result = arr.filter((i) => i == max).length;

  return result;
}

const arr = [3, 3, 3, 3];

console.log(birthdayCakeCandles(arr));

/*
  https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/
