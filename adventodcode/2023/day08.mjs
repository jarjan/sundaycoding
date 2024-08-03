import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day08.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n");

    // console.log("part1: ", part1(arr));
    // console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

const stength = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];

function part1(arr) {
  return arr;
}

console.log(
  "test 1:",
  part1(["32T3K 765", "T55J5 684", "KK677 28", "KTJJT 220", "QQQJA 483"])
);

function part2(arr) {
  return arr;
}

// console.log(
//   "test 2:",
//   part2(["32T3K 765", "T55J5 684", "KK677 28", "KTJJT 220", "QQQJA 483"])
// );
