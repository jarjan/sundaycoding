/*
 * Complete the 'arrangeStudents' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function arrangeStudents(a, b) {
  // Write your code here
  let resultBoys = true;
  let resultGirls = true;
  const sortedBoys = a.sort((a, b) => a - b);
  const sortedGirls = b.sort((a, b) => a - b);

  for (var i = 0; i < a.length; i++) {
    if (sortedBoys[i] > sortedGirls[i]) {
      resultBoys = false;
    }
    if (i > 0 && sortedBoys[i] < sortedGirls[i - 1]) {
      resultBoys = false;
    }

    if (sortedBoys[i] < sortedGirls[i]) {
      resultGirls = false;
    }
    if (i > 0 && sortedGirls[i] < sortedBoys[i - 1]) {
      resultGirls = false;
    }
  }

  return resultGirls || resultBoys ? "YES" : "NO";
}

let a = [10, 100, 100];
let b = [1, 10, 100];
console.log("result: ", arrangeStudents(a, b));

/* 
  https://www.hackerrank.com/contests/hack-the-interview-iv-apac/challenges/arrange-students
*/
