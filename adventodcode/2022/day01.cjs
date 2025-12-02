const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day01.txt"), "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const strArr = str.split("\n");
  const arr = [[]];
  strArr.map((newStr) => {
    if (newStr === "") {
      arr.push([]);
    } else {
      arr[arr.length - 1].push(Number(newStr));
    }
  });
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function part1(arr) {
  return arr.reduce((acc, currArr) => Math.max(acc, sum(currArr)), 0);
}

console.log(
  "test1: ",
  part1([[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]])
);

const compareNumbers = (a, b) => a - b;

function part2(arr) {
  const sumArr = arr.map((currArr) => sum(currArr));

  sumArr.sort(compareNumbers);
  return sum(sumArr.slice(-3));
}

console.log(
  "test2: ",
  part2([[1000, 2000, 3000], [4000], [5000, 6000], [7000, 8000, 9000], [10000]])
);
