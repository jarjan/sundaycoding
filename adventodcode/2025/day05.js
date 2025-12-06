import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day05.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n").reduce(
      (acc, curr) => {
        if (curr.includes("-")) {
          acc[0].push(curr);
        } else if (curr !== "") {
          {
            acc[1].push(curr);
          }
        }
        return acc;
      },
      [[], []]
    );

    console.log("part1: ", part1(arr));
    console.log("part2: ", part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

const test = [
  ["3-5", "10-14", "16-20", "12-18"],
  ["1", "5", "8", "11", "17", "32"],
];

function part1(arr) {
  let sum = 0;
  const ranges = arr[0].map((str) => {
    return str.split("-").map((num) => parseInt(num));
  });
  const nums = arr[1].map((str) => parseInt(str));

  nums.forEach((num) => {
    let found = ranges.some((range) => {
      return num >= range[0] && num <= range[1];
    });

    if (found) {
      sum++;
    }
  });

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = 0;
  const lower = 0;
  const upper = 1;

  const ranges = arr[0].map((str) => {
    const range = str.split("-").map((num) => parseInt(num));

    return [range[lower], range[upper]];
  });

  let mRanges = []; // merged ranges
  let tRanges = Array.from(ranges); // temporary ranges
  tRanges.sort((a, b) => a[0] - b[0]);

  while (true) {
    mRanges = [];
    let skip = false;
    for (let i = 0; i < tRanges.length; i++) {
      const curr = tRanges[i];
      const next = tRanges[i + 1];

      if (curr[upper] >= next?.[lower]) {
        mRanges.push([curr[lower], Math.max(curr[upper], next[upper])]);
        skip = true;
      } else {
        if (!skip) {
          mRanges.push(curr);
        }

        skip = false;
      }
    }

    if (tRanges.length === mRanges.length) {
      break;
    }

    tRanges = Array.from(mRanges);
    tRanges.sort((a, b) => a[0] - b[0]);
  }

  for (let i = 0; i < mRanges.length; i++) {
    sum += mRanges[i][1] - mRanges[i][0] + 1;
  }

  return sum;
}

console.log("test2: ", part2(test));
