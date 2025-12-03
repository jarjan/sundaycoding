import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day03.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n");

    console.log("part1: ", part1(arr));
    console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

const test = [
  "987654321111111",
  "811111111111119",
  "234234234234278",
  "818181911112111",
];

function part1(arr) {
  let sum = 0;

  arr.forEach((str) => {
    let max = 0;
    for (let i = 0; i < str.length - 1; i++) {
      for (let j = i + 1; j < str.length; j++) {
        max = Math.max(max, parseInt(str[i] + str[j]));
      }
    }
    sum += max;
  });

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = BigInt(0);

  arr.forEach((str) => {
    let num = str.length - 12;
    const max = [];

    for (const digit of str) {
      while (max.length > 0 && digit > max[max.length - 1] && num > 0) {
        max.pop();
        num--;
      }
      max.push(digit);
    }

    sum += BigInt(max.slice(0, 12).join(""));
  });

  return sum.toString();
}

console.log("test2: ", part2(test));
