const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day02.txt"), "utf8", (err, str) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = str.split("\n");

  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function part1(arr) {
  let sum = 0;

  arr.forEach((str) => {
    let [gameId, games] = str.split(": ");
    gameId = gameId.slice(5);
    games = games.split("; ");
    const red = 12;
    const green = 13;
    const blue = 14;

    const isPossible = games.every((game) => {
      const colors = game.split(", ");
      return colors.every((color) => {
        const [quantity, colorName] = color.split(" ");
        if (colorName === "red") {
          return red >= Number(quantity);
        } else if (colorName === "green") {
          return green >= Number(quantity);
        } else if (colorName === "blue") {
          return blue >= Number(quantity);
        }
        return false;
      });
    });
    if (isPossible) {
      sum += Number(gameId);
    }
  });

  return sum;
}

console.log(
  "test1: ",
  part1([
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
  ])
);

function part2(arr) {
  let sum = 0;

  arr.forEach((str) => {
    let [gameId, games] = str.split(": ");
    gameId = gameId.slice(5);
    games = games.split("; ");
    let red = 0;
    let green = 0;
    let blue = 0;

    games.forEach((game) => {
      const colors = game.split(", ");
      colors.forEach((color) => {
        const [quantity, colorName] = color.split(" ");
        if (colorName === "red") {
          red = Math.max(red, Number(quantity));
        } else if (colorName === "green") {
          green = Math.max(green, Number(quantity));
        } else if (colorName === "blue") {
          blue = Math.max(blue, Number(quantity));
        }
      });
    });
    sum += red * green * blue;
  });

  return sum;
}

console.log(
  "test2: ",
  part2([
    "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green",
    "Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue",
    "Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red",
    "Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red",
    "Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green",
  ])
);
