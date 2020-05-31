function diagonalDifference(arr) {
  let first = 0;
  let second = 0;
  const n = arr.length;

  for (var i = 0; i < n; i++) {
    first += arr[i][i];
    second += arr[i][n - 1 - i];
  }

  return Math.abs(first - second);
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));

/*
  https://www.hackerrank.com/challenges/diagonal-difference/problem
*/
