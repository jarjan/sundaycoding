// Complete the staircase function below.
function staircase(n) {
  for (var i = 1; i <= n; i++) {
    const str = "#".repeat(i);
    console.log(str.padStart(n, " "));
  }
}

staircase(4);
/*
  https://www.hackerrank.com/challenges/staircase/problem
  Print a staircase of size using # symbols and spaces.
*/
