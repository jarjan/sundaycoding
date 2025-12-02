const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day05.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const [crates, arr] = data.split("\n\n");
  const commands = arr.split("\n");
  console.log("part1: ", part1(crates, commands));
  console.log("part2: ", part2(crates, commands));
});

function part1(crates, commands) {
  let result = "";
  // Convert to array and remove last empty line
  const arr = [...crates.split("\n")].filter((elem) => elem !== "");
  // Get and exclude the row with numbers
  const last = arr.pop();
  const total = Math.floor((last.length + 2) / 4);
  const stacks = [];
  arr.forEach((crate) => {
    for (i = 1; i <= total; i++) {
      if (crate[4 * i - 3] !== " " && crate[4 * i - 3]) {
        // Create an array if it doesn't exist yet
        if (!stacks[i - 1]) {
          stacks[i - 1] = "";
        }
        stacks[i - 1] += crate[4 * i - 3];
      }
    }
  });

  commands.forEach((command) => {
    const count = Number(command.slice(5, command.indexOf(" from")));
    const from = Number(command[command.length - 6]);
    const to = Number(command[command.length - 1]);
    const tempStr = stacks[from - 1]
      .slice(0, count)
      .split("")
      .reverse()
      .join("");
    stacks[from - 1] = stacks[from - 1].slice(count);
    stacks[to - 1] = tempStr + stacks[to - 1];
  });

  stacks.forEach((stack) => {
    result += stack[0] || " ";
  });

  return result;
}

console.log(
  "test1: ",
  part1("    [D]    \n" + "[N] [C]    \n" + "[Z] [M] [P]\n" + " 1   2   3 \n", [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ])
);

// Same solution as part 1 but without reverse
function part2(crates, commands) {
  let result = "";
  // Convert to array and remove last empty line
  const arr = [...crates.split("\n")].filter((elem) => elem !== "");
  // Get and exclude the row with numbers
  const last = arr.pop();
  const total = Math.floor((last.length + 2) / 4);
  const stacks = [];
  arr.forEach((crate) => {
    for (i = 1; i <= total; i++) {
      if (crate[4 * i - 3] !== " " && crate[4 * i - 3]) {
        // Create an array if it doesn't exist yet
        if (!stacks[i - 1]) {
          stacks[i - 1] = "";
        }
        stacks[i - 1] += crate[4 * i - 3];
      }
    }
  });

  commands.forEach((command) => {
    const count = Number(command.slice(5, command.indexOf(" from")));
    const from = Number(command[command.length - 6]);
    const to = Number(command[command.length - 1]);
    const tempStr = stacks[from - 1].slice(0, count);
    stacks[from - 1] = stacks[from - 1].slice(count);
    stacks[to - 1] = tempStr + stacks[to - 1];
  });

  stacks.forEach((stack) => {
    result += stack[0] || " ";
  });

  return result;
}

console.log(
  "test2: ",
  part2("    [D]    \n" + "[N] [C]    \n" + "[Z] [M] [P]\n" + " 1   2   3 \n", [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ])
);
