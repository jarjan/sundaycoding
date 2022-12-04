const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day04.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function part1(arr) {
  let count = 0;
  arr.forEach((str) => {
    const [a, b] = str.split(",");
    const [minA, maxA] = a.split("-").map((num) => Number(num));
    const [minB, maxB] = b.split("-").map((num) => Number(num));

    if ((minA <= minB && maxA >= maxB) || (minA >= minB && maxA <= maxB)) {
      count++;
    }
  });
  return count;
}

console.log(
  "test1: ",
  part1(["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"])
);

function part2(arr) {
  let count = 0;
  arr.forEach((str) => {
    const [a, b] = str.split(",");
    const [minA, maxA] = a.split("-").map((num) => Number(num));
    const [minB, maxB] = b.split("-").map((num) => Number(num));
    if ((minA <= minB && maxA >= minB) || (minA >= minB && maxB >= minA)) {
      count++;
    }
  });
  return count;
}

console.log(
  "test2: ",
  part2(["2-4,6-8", "2-3,4-5", "5-7,7-9", "2-8,3-7", "6-6,4-6", "2-6,4-8"])
);
