const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day07.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  // console.log("part1: ", part1(arr));
  // console.log("part2: ", part2(arr));
});

function findFolder(root, folder) {
  if (root.type === "directory") {
    if (root.name === folder) {
      return root;
    }
    for (let i = 0; i < root.children.length; i++) {
      return findFolder(root.children[i], folder);
    }
  }
}

function part1(arr) {
  const root = { name: "/", type: "directory", children: [] };
  let currentFolder = "/";
  let listFiles = false;
  arr.forEach((line) => {
    if (line.startsWith("$ cd /") || line === "") {
      listFiles = false;
      // do nothing
    } else if (line.startsWith("$ cd ")) {
      listFiles = false;
      currentFolder = line.slice(5) === ".." ? "/" : line.slice(5);
    } else if (!listFiles && line.startsWith("$ ls")) {
      listFiles = true;
    } else if (listFiles && !line.startsWith("$ ")) {
      const folder = findFolder(root, currentFolder);
      console.log({ folder, currentFolder });
      if (folder) {
        if (line.startsWith("dir ")) {
          folder.children.push({
            name: line.slice(4),
            type: "directory",
            children: [],
          });
        } else {
          const [size, name] = line.split(" ");
          folder.children.push({
            name,
            type: "file",
            meta: { size },
          });
        }
      }
    }
  });

  return JSON.stringify(root, null, "\t");
}

console.log(
  "test1: ",
  part1([
    "$ cd /",
    "$ ls",
    "dir a",
    "14848514 b.txt",
    "8504156 c.dat",
    "dir d",
    "$ cd a",
    "$ ls",
    "dir e",
    "29116 f",
    "2557 g",
    "62596 h.lst",
    "$ cd e",
    "$ ls",
    "584 i",
    "$ cd ..",
    "$ cd ..",
    "$ cd d",
    "$ ls",
    "4060174 j",
    "8033020 d.log",
    "5626152 d.ext",
    "7214296 k",
    "",
  ])
);

function part2(str) {}

console.log(
  "test2: ",
  part2([
    "$ cd /",
    "$ ls",
    "dir a",
    "14848514 b.txt",
    "8504156 c.dat",
    "dir d",
    "$ cd a",
    "$ ls",
    "dir e",
    "29116 f",
    "2557 g",
    "62596 h.lst",
    "$ cd e",
    "$ ls",
    "584 i",
    "$ cd ..",
    "$ cd ..",
    "$ cd d",
    "$ ls",
    "4060174 j",
    "8033020 d.log",
    "5626152 d.ext",
    "7214296 k",
    "",
  ])
);
