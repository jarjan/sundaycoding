import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day04.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    const arr = str.split("\n");

    console.log(part1(arr));
    console.log(part2(arr));
  })
  .catch((err) => {
    console.error(err);
  });

function part1(arr) {
  let sum = 0;

  arr.forEach((line, index) => {
    let points = 0;
    const cardNumber = index + 1;
    const [_, cardNumbers] = line.split(": ");
    const [left, right] = cardNumbers.split(" | ");
    const wins = left
      .split(" ")
      .filter((n) => Boolean(n))
      .map((n) => parseInt(n, 10));
    const numbers = right
      .split(" ")
      .filter((n) => Boolean(n))
      .map((n) => parseInt(n, 10));

    numbers.forEach((n) => {
      if (wins.includes(n)) {
        if (points < 2) {
          points += 1;
        } else {
          points *= 2;
        }
      }
    });

    sum += points;
  });

  return sum;
}

console.log(
  "part 1:",
  part1([
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
  ])
);

function part2(arr) {
  const cards = Array.from({ length: arr.length }, (_, index) => ({
    cardNumber: index + 1,
    points: 0,
    count: 1,
  }));

  arr.forEach((line, index) => {
    const [_, cardNumbers] = line.split(": ");
    const [left, right] = cardNumbers.split(" | ");
    const wins = left
      .split(" ")
      .filter((n) => Boolean(n))
      .map((n) => parseInt(n, 10));
    const numbers = right
      .split(" ")
      .filter((n) => Boolean(n))
      .map((n) => parseInt(n, 10));

    numbers.forEach((n) => {
      if (wins.includes(n)) {
        cards[index].points += 1;
      }
    });

    if (cards[index].points > 0) {
      for (
        let i = index + 1;
        i <= index + cards[index].points && i < cards.length;
        i++
      ) {
        cards[i].count += cards[index].count;
      }
    }
  });

  console.log(cards);

  return cards.reduce((total, card) => total + card.count, 0);
}

console.log(
  "part 2:",
  part2([
    "Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53",
    "Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19",
    "Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1",
    "Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83",
    "Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36",
    "Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11",
  ])
);
