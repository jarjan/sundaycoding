import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day06.txt");

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
  "123 328  51 64 ",
  " 45 64  387 23 ",
  "  6 98  215 314",
  "*   +   *   + ",
];

function part1(arr) {
  let sum = 0;
  const ops = arr[arr.length - 1].split(" ").filter((item) => item !== "");

  const nums = arr.slice(0, arr.length - 1).map((str) =>
    str
      .split(" ")
      .filter((item) => item !== "")
      .map((item) => parseInt(item))
  );

  for (let i = 0; i < nums[0].length; i++) {
    sum += nums.reduce((acc, curr) => {
      if (ops[i] === "+") {
        acc += curr[i];
      } else {
        acc *= curr[i];
      }
      return acc;
    }, 1);
    if (ops[i] === "+") {
      sum--;
    }
  }

  return sum;
}

console.log("test1: ", part1(test));

function part2(arr) {
  let sum = 0;

  const ops = arr[arr.length - 1].split("").reduce((acc, curr, index) => {
    if (["+", "*"].includes(curr)) {
      acc.push({ op: curr, index });
    }
    return acc;
  }, []);
  const nums = arr.slice(0, arr.length - 1);

  for (let o = 0; o < ops.length; o++) {
    const lowerIndex = ops[o].index;
    const upperIndex = ops?.[o + 1] ? ops[o + 1].index : nums[0].length + 1;
    const op = ops[o].op;

    let total = 1;
    let num = "";

    for (let i = lowerIndex; i < upperIndex - 1; i++) {
      num = "";
      for (let j = 0; j < nums.length; j++) {
        if (nums[j][i] !== " ") num += nums[j][i];
      }
      if (op === "+") {
        total += parseInt(num);
      }
      if (op === "*") {
        total *= parseInt(num);
      }
    }
    if (op === "+") total--;

    sum += total;
  }

  return sum;
}

console.log("test2: ", part2(test));
