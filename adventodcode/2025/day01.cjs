const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "./input/day01.txt"), "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = str.split("\n");

  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function part1(arr) {
  let sum = 0;
  let dial = 50;

  arr.forEach((str) => {
    const direction = str[0];
    const distance = parseInt(str.slice(1));
    const short_distance = distance % 100;
    const start = dial;

    if (direction === "L") {
      dial = dial - short_distance;

      if (start - short_distance === 0) {
        sum++;
      }
    }

    if (direction === "R") {
      dial = dial + short_distance;

      if (start + short_distance === 100) {
        sum++;
      }
    }

    if (dial < 0) {
      dial += 100;
    }
    dial %= 100;
  });

  return sum;
}

console.log(
  "test1: ",
  part1(["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"])
);

function part2(arr) {
  let sum = 0;
  let dial = 50;

  arr.forEach((str, index) => {
    const direction = str[0];
    const distance = parseInt(str.slice(1));
    const short_distance = distance % 100;
    const count_100 = Math.abs((distance - short_distance) / 100);
    const start = dial;

    if (direction === "L") {
      dial = dial - short_distance;

      if (start !== 0 && start - short_distance <= 0) {
        sum++;
      }
    }

    if (direction === "R") {
      dial = dial + short_distance;

      if (start !== 0 && start + short_distance >= 100) {
        sum++;
      }
    }

    sum += count_100;

    if (dial < 0) {
      dial += 100;
    }
    dial %= 100;
  });

  return sum;
}

console.log(
  "test2: ",
  part2(["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"])
);
