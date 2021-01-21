// Complete the breakingRecords function below.
function breakingRecords(scores) {
  let [max, min] = [0, 0];
  let [currMax, currMin] = [scores[0], scores[0]];

  for (var score of scores) {
    if (score > currMax) {
      max++;
      currMax = score;
    }
    if (score < currMin) {
      min++;
      currMin = score;
    }
  }

  return [max, min];
}

const scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];

console.log(breakingRecords(scores));

/*
  https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem
*/
