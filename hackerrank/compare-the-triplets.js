// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let resultA = 0;
  let resultB = 0;

  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) resultA++;
    if (a[i] < b[i]) resultB++;
  }

  return [resultA, resultB];
}

const a = [17, 28, 30];
const b = [99, 16, 8];
console.log(compareTriplets(a, b));

/* 
  https://www.hackerrank.com/challenges/compare-the-triplets/problem
  Return an array of two integers denoting 
  the respective comparison points earned by Alice and Bob.
*/
