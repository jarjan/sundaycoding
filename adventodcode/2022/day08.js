const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day08.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function makeField(arr) {
  const field = [];
  arr.forEach((row) => {
    if (row !== "") {
      field.push(row.split("").map((item) => Number(item)));
    }
  });
  return field;
}

function part1(arr) {
  const field = makeField(arr);
  const width = field[0].length;
  const height = field.length;
  let total = (width - 1 + height - 1) * 2;

  for (let i = 1; i < width - 1; i++) {
    for (let j = 1; j < height - 1; j++) {
      const elem = field[i][j];
      let isBig = true;
      // from left
      for (let k = 0; k < j; k++) {
        if (field[i][k] >= elem) {
          isBig = false;
          break;
        }
      }
      if (isBig) {
        total++;
        continue;
      }
      isBig = true;
      // from right
      for (let k = j + 1; k < width; k++) {
        if (field[i][k] >= elem) {
          isBig = false;
          break;
        }
      }
      if (isBig) {
        total++;
        continue;
      }
      isBig = true;
      // from top
      for (let k = 0; k < i; k++) {
        if (field[k][j] >= elem) {
          isBig = false;
          break;
        }
      }
      if (isBig) {
        total++;
        continue;
      }
      isBig = true;
      // from bottom
      for (let k = i + 1; k < height; k++) {
        if (field[k][j] >= elem) {
          isBig = false;
          break;
        }
      }
      if (isBig) {
        total++;
        continue;
      }
    }
  }

  return total;
}

console.log("test1: ", part1(["30373", "25512", "65332", "33549", "35390"]));

function part2(arr) {
  const field = makeField(arr);
  const width = field[0].length;
  const height = field.length;

  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i < width - 1; i++) {
    for (let j = 1; j < height - 1; j++) {
      const elem = field[i][j];
      let countLeft = 0;
      for (let k = j - 1; k >= 0; k--) {
        countLeft++;
        if (field[i][k] >= elem) {
          break;
        }
      }
      let countRight = 0;
      for (let k = j + 1; k < width; k++) {
        countRight++;
        if (field[i][k] >= elem) {
          break;
        }
      }
      let countTop = 0;
      for (let k = i - 1; k >= 0; k--) {
        countTop++;
        if (field[k][j] >= elem) {
          break;
        }
      }
      let countBottom = 0;
      for (let k = i + 1; k < height; k++) {
        countBottom++;
        if (field[k][j] >= elem) {
          break;
        }
      }
      const total = countLeft * countRight * countTop * countBottom;
      max = total >= max ? total : max;
    }
  }
  return max;
}

console.log("test2: ", part2(["30373", "25512", "65332", "33549", "35390"]));
