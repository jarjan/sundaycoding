import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day02.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split(",");

    console.log("part1: ", part1(arr));
    // console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

function part1(arr) {
  let sum = BigInt(0);

  arr.forEach((str) => {
    const [one, two] = str.split("-");
    const first = BigInt(one);
    const second = BigInt(two);
    for (let i = first; i <= second; i++) {
      const num = i.toString();
      if (
        num.length % 2 === 0 &&
        num.slice(0, num.length / 2) === num.slice(num.length / 2)
      ) {
        sum += i;
      }
    }
  });

  return sum.toString();
}

console.log(
  "test1: ",
  part1([
    "11-22",
    "95-115",
    "998-1012",
    "1188511880-1188511890",
    "222220-222224",
    "1698522-1698528",
    "446443-446449",
    "38593856-38593862",
    "565653-565659",
    "824824821-824824827",
    "2121212118-2121212124",
  ])
);

function part2(arr) {
  let sum = 0;

  return sum;
}

// console.log(
//   "test2: ",
//   part2([
//     "11-22",
//     "95-115",
//     "998-1012",
//     "1188511880-1188511890",
//     "222220-222224",
//     "1698522-1698528",
//     "446443-446449",
//     "38593856-38593862",
//     "565653-565659",
//     "824824821-824824827",
//     "2121212118-2121212124",
//   ])
// );
