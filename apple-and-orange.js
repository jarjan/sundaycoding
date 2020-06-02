// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let countApples = 0;
  let countOranges = 0;

  for (var apple of apples) {
    const x = apple + a;
    if (x >= s && x <= t) {
      countApples++;
    }
  }

  for (var orange of oranges) {
    const x = orange + b;
    if (x >= s && x <= t) {
      countOranges++;
    }
  }

  console.log(countApples);
  console.log(countOranges);
}

const [s, t] = [7, 11];
const [a, b] = [5, 15];
const apples = [-2, 2, 1];
const oranges = [5, -6];

countApplesAndOranges(s, t, a, b, apples, oranges);

/*
  https://www.hackerrank.com/challenges/apple-and-orange/problem
*/
