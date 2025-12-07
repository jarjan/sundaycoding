import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day07.txt");

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
  ".......S.......",
  "...............",
  ".......^.......",
  "...............",
  "......^.^......",
  "...............",
  ".....^.^.^.....",
  "...............",
  "....^.^...^....",
  "...............",
  "...^.^...^.^...",
  "...............",
  "..^...^.....^..",
  "...............",
  ".^.^.^.^.^...^.",
  "...............",
];

function part1(arr) {
  let sum = 0;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i].split("");

    if (i > 0) {
      const prev = result[i - 1].split("");

      for (let i = 0; i < curr.length; i++) {
        if (curr[i] === "^" && prev[i] === "|") {
          sum++;
          if (i > 0) curr[i - 1] = "|";
          if (i < curr.length - 1) curr[i + 1] = "|";
        } else if (prev[i] === "S" || prev[i] === "|") {
          curr[i] = "|";
        }
      }
    }

    result.push(curr.join(""));
  }

  // console.log("---------------");
  // console.log(arr.join("\n"));
  // console.log("---------------");
  // console.log(result.join("\n"));
  // console.log("---------------");

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = 0;

  return sum;
}

console.log("test2: ", part2(test));
