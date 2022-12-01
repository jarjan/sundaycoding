// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let minSum = 0;
  let maxSum = 0;

  if (min == max) {
    minSum = maxSum = min * (arr.length - 1);
  } else {
    minSum = arr.reduce((sum, curr) => {
      return sum + (max == curr ? 0 : curr);
    }, 0);
    maxSum = arr.reduce((sum, curr) => {
      return sum + (min == curr ? 0 : curr);
    }, 0);
  }

  console.log(minSum, maxSum);
}

const arr = [5, 5, 5, 5, 5];

miniMaxSum(arr);

/*
  https://www.hackerrank.com/challenges/mini-max-sum/problem
*/
