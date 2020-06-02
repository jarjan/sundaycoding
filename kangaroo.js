// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  const n = Number.isInteger((x2 - x1) / (v1 - v2));
  const m = (x1 > x2 && v1 < v2) || (x1 < x2 && v1 > v2);
  return n && m ? "YES" : "NO";
}

const [x1, v1, x2, v2] = [0, 3, 4, 2];
console.log(kangaroo(x1, v1, x2, v2));

/*
  https://www.hackerrank.com/challenges/kangaroo/problem
*/
