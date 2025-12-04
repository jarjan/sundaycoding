import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/input.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n");

    console.log("part1: ", part1(arr));
    console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

const test = [];

function part1(arr) {
  let sum = 0;

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = 0;

  return sum;
}

console.log("test2: ", part2(test));
