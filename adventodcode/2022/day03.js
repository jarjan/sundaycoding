const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day03.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function calculateValue(char) {
  if (char.charCodeAt() <= 90) {
    return char.charCodeAt() - 38;
  } else {
    return char.charCodeAt() - 96;
  }
}

function part1(arr) {
  const pairs = arr.map((str) => [
    str.slice(0, str.length / 2),
    str.slice(str.length / 2),
  ]);
  let sum = 0;
  pairs.map(([first, second]) => {
    // convert first part of string to array and remove duplicating items via Set
    [...new Set([...first])].map((char) => {
      if (second.includes(char)) {
        const score = calculateValue(char);
        sum += score;
      }
    });
  });
  return sum;
}

console.log(
  "test1: ",
  part1([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ])
);

function part2(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 3) {
    const [first, second, third] = [arr[i], arr[i + 1], arr[i + 2]];
    const common = [...first]
      .filter((char) => second.includes(char))
      .filter((char) => third.includes(char))[0];

    const score = calculateValue(common);
    sum += score;
  }
  return sum;
}

console.log(
  "test2: ",
  part2([
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw",
  ])
);
