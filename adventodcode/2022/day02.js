const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day02.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data
    .split("\n")
    .map((str) => (str !== "" ? [str[0], str[2]] : []));
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

// A | X = 1 Rock
// B | Y = 2 Paper
// C | Z = 3 Scissors
function replacePair(arr) {
  return [arr[0].charCodeAt() - 64, arr[1].charCodeAt() - 87];
}

function part1(arr) {
  const rounds = arr.map(replacePair);
  let sum = 0;
  rounds.map(([elf, player]) => {
    let score = player;
    if (elf === player) {
      score += 3;
    } else {
      if (
        (elf === 1 && player === 2) ||
        (elf === 3 && player === 1) ||
        (elf === 2 && player === 3)
      ) {
        score += 6;
      }
    }
    sum = sum + score;
  });
  return sum;
}

console.log(
  "part1: ",
  part1([
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ])
);

// 1 = lose
// 2 = draw
// 3 = win
function part2(arr) {
  const rounds = arr.map(replacePair);
  let sum = 0;
  rounds.map(([elf, decision]) => {
    let score = 0;
    if (decision === 1) {
      if (elf === 1) score += 3;
      if (elf === 2) score += 1;
      if (elf === 3) score += 2;
    }
    if (decision === 2) {
      score = elf + 3;
    }
    if (decision === 3) {
      score = 6;
      if (elf === 1) score += 2;
      if (elf === 2) score += 3;
      if (elf === 3) score += 1;
    }
    sum = sum + score;
  });
  return sum;
}

console.log(
  "part2: ",
  part2([
    ["A", "Y"],
    ["B", "X"],
    ["C", "Z"],
  ])
);
