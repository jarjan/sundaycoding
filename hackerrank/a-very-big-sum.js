const BigNumber = require("bignumber.js");
// Complete the aVeryBigSum function below.
function aVeryBigSum(arr) {
  let sum = BigNumber(0);

  for (var i = 0; i < arr.length; i++) {
    sum = sum.plus(BigNumber(arr[i]));
  }

  return sum.toFixed();
}

const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
console.log(aVeryBigSum(arr));

/* 
  https://www.hackerrank.com/challenges/a-very-big-sum/problem
  Calculate and print the sum of the elements in an array, 
  keeping in mind that some of those integers may be qute large. 
*/
