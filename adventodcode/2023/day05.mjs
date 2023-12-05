import fs from "fs/promises";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const inputFile = path.join(__dirname, "./input/day05.txt");

fs.readFile(inputFile, { encoding: "utf8" })
  .then((str) => {
    // console.log(part1(str));
    // console.log(part2(str));
  })
  .catch((err) => {
    console.error(err);
  });

function mapping(inputArr, mapArr) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    let input = inputArr[i];
    let map = mapArr.find((m) => m[0] <= input && input < m[0] + m[2]);
    if (map) {
      outputArr.push(Math.abs(map[1] - map[2]) + input);
    } else {
      outputArr.push(input);
    }
  }
  return outputArr;
}

function part1(str) {
  const [strSeeds, ...strMaps] = str.split("\n\n");
  const seeds = strSeeds
    .split(": ")[1]
    .split(" ")
    .map((n) => parseInt(n, 10));
  const maps = strMaps.map((strMap) =>
    strMap
      .split("\n")
      .slice(1)
      .map((row) => row.split(" ").map((n) => parseInt(n, 10)))
  );
  const [
    seed2soil,
    soil2fert,
    fert2water,
    water2light,
    light2temp,
    temp2humi,
    humi2loc,
  ] = maps;

  const soils = mapping(seeds, seed2soil);
  const ferts = mapping(soils, soil2fert);
  const waters = mapping(ferts, fert2water);
  const lights = mapping(waters, water2light);
  const temps = mapping(lights, light2temp);
  const humis = mapping(temps, temp2humi);
  const locs = mapping(humis, humi2loc);

  seeds.forEach((_, i) => {
    console.log(
      seeds[i],
      soils[i],
      ferts[i],
      waters[i],
      lights[i],
      temps[i],
      humis[i],
      locs[i]
    );
  });

  return Math.min(...locs);
}

console.log(
  "part 1:",
  part1(`seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`)
);

function part2(str) {
  return str;
}

// console.log(
//   "part 2:",
//   part2(`seeds: 79 14 55 13

//   seed-to-soil map:
//   50 98 2
//   52 50 48

//   soil-to-fertilizer map:
//   0 15 37
//   37 52 2
//   39 0 15

//   fertilizer-to-water map:
//   49 53 8
//   0 11 42
//   42 0 7
//   57 7 4

//   water-to-light map:
//   88 18 7
//   18 25 70

//   light-to-temperature map:
//   45 77 23
//   81 45 19
//   68 64 13

//   temperature-to-humidity map:
//   0 69 1
//   1 0 69

//   humidity-to-location map:
//   60 56 37
//   56 93 4`)
// );
