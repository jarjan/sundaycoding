const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "./input/day01.txt"), "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = str.split("\n");

  console.log("part1: ", part1(arr));
  // console.log("part2: ", part2(arr));
});

function part1(arr) {
  let sum = 0;

  let dial = 50;

  arr.forEach((str) => {
    const direction = str[0];
    const distance = parseInt(str.slice(1));

    if (direction === "L") {
      dial -= distance;
    } else {
      dial += distance;
    }

    dial %= 100;

    if (dial === 0) {
      sum++;
    }
  });

  return sum;
}

console.log(
  "test1: ",
  part1(["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"])
);

// function part2(arr) {
//   let sum = 0;

//   0;
//   return sum;
// }

// console.log(
//   "test2: ",
//   part2(["L68", "L30", "R48", "L5", "R60", "L55", "L1", "L99", "R14", "L82"])
// );
