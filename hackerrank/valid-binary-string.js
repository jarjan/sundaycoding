/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER d
 */

function minimumMoves(s, d) {
  // Write your code here
  let total = 0;
  let count = 0;

  for (var i = 0; i < s.length; i++) {
    if (s[i] == "1") count = 0;
    if (s[i] == "0") count++;

    if (count == d) {
      total++;
      count = 0;
    }
  }

  return total;
}

console.log("result: ", minimumMoves("101010101010", 2));

/* 
  https://www.hackerrank.com/contests/hack-the-interview-iv-apac/challenges/good-binary-string
*/
