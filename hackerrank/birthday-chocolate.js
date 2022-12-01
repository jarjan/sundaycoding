// Complete the birthday function below.
function birthday(s, d, m) {
  let result = 0;

  for (var i = 0; i < s.length - m + 1; i++) {
    const number = s.slice(i, m + i).reduce((acc, curr) => acc + curr, 0);
    if (number === d) result++;
  }

  return result;
}

const [s, d, m] = [[1, 2, 1, 3, 2], 3, 2];
// const [s, d, m] = [[4], 4, 1];

console.log(birthday(s, d, m));

/*
  https://www.hackerrank.com/challenges/the-birthday-bar/problem
*/
