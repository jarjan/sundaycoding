import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day04.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n");

    console.log("part1: ", part1(arr));
    // console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

const test = [
  "..@@.@@@@.",
  "@@@.@.@.@@",
  "@@@@@.@.@@",
  "@.@@@@..@.",
  "@@.@@@@.@@",
  ".@@@@@@@.@",
  ".@.@.@.@@@",
  "@.@@@.@@@@",
  ".@@@@@@@@.",
  "@.@.@@@.@.",
];

function part1(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "@") {
        let count = 0;
        if (arr[i - 1]?.[j - 1] === "@") count++;
        if (arr[i - 1]?.[j] === "@") count++;
        if (arr[i - 1]?.[j + 1] === "@") count++;
        if (arr[i]?.[j - 1] === "@") count++;
        if (arr[i]?.[j + 1] === "@") count++;
        if (arr[i + 1]?.[j - 1] === "@") count++;
        if (arr[i + 1]?.[j] === "@") count++;
        if (arr[i + 1]?.[j + 1] === "@") count++;
        if (count < 4) sum++;
      }
    }
  }

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = 0;

  return sum;
}

// console.log("test2: ", part2(test));
