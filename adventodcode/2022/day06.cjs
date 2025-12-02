const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day06.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("part1: ", part1(data));
  console.log("part2: ", part2(data));
});

function part1(str) {
  for (let i = 0; i < str.length - 4; i++) {
    const temp = str.slice(i, i + 4);

    if (new Set([...temp]).size === 4) {
      return i + 4;
    }
  }

  return -1;
}

console.log("test1: ", part1("mjqjpqmgbljsphdztnvjfqwrcgsmlb"));
console.log("test1: ", part1("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log("test1: ", part1("nppdvjthqldpwncqszvftbrmjlhg"));
console.log("test1: ", part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
console.log("test1: ", part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"));

function part2(str) {
  for (let i = 0; i < str.length - 14; i++) {
    const temp = str.slice(i, i + 14);

    if (new Set([...temp]).size === 14) {
      return i + 14;
    }
  }

  return -1;
}

console.log("test2: ", part2("mjqjpqmgbljsphdztnvjfqwrcgsmlb"));
console.log("test2: ", part2("bvwbjplbgvbhsrlpgdmjqwftvncz"));
console.log("test2: ", part2("nppdvjthqldpwncqszvftbrmjlhg"));
console.log("test2: ", part2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"));
console.log("test2: ", part2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"));
