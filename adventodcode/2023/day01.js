const fs = require("fs");
var path = require("path");

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

  arr.forEach((str) => {
    const digits = str.match(/\d{1}/g);
    const firstDigit = digits[0];
    const lastDigit = digits.length > 1 ? digits[digits.length - 1] : digits[0];

    sum += Number(`${firstDigit}${lastDigit}`);
  });

  return sum;
}

console.log(
  "test1: ",
  part1(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
);

function part2(arr) {
  let sum = 0;
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  arr.forEach((str) => {
    const digits = str.match(/\d{1}/g);
    const words = Array.from(
      str.matchAll(/(?=(zero|one|two|three|four|five|six|seven|eight|nine))/g),
      (x) => x[1]
    );

    let firstDigit = null;
    let lastDigit = null;
    if (digits) {
      firstDigit = digits[0];
      lastDigit = digits.length > 1 ? digits[digits.length - 1] : digits[0];
    }

    let firstWord = null;
    let lastWord = null;
    if (words.length > 0) {
      firstWord = words[0];
      lastWord = words.length > 1 ? words[words.length - 1] : words[0];
    }

    if (
      (str.indexOf(firstWord) < str.indexOf(firstDigit) ||
        firstDigit === null) &&
      firstWord !== null
    ) {
      firstDigit = numbers.indexOf(firstWord);
    }

    if (
      (str.lastIndexOf(lastWord) > str.lastIndexOf(lastDigit) ||
        lastDigit === null) &&
      lastWord !== null
    ) {
      lastDigit = numbers.indexOf(lastWord);
    }

    sum += Number(`${firstDigit}${lastDigit}`);
  });

  return sum;
}

console.log(
  "test2: ",
  part2([
    "two1nine",
    "eightwothree",
    "abcone2threexyz",
    "xtwone3four",
    "4nineeightseven2",
    "zoneight234",
    "7pqrstsixteen",
  ])
);
