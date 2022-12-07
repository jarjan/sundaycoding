const fs = require("fs");
var path = require("path");

fs.readFile(path.join(__dirname, "./input/day07.txt"), "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const arr = data.split("\n");
  console.log("part1: ", part1(arr));
  console.log("part2: ", part2(arr));
});

function parseArray(arr, root) {
  const folderNavStack = [root];
  let currentFolder = {};
  let listFiles = false;
  arr.forEach((line) => {
    if (line.startsWith("$ cd /") || line === "") {
      listFiles = false;
      currentFolder = root;
      // do nothing
    } else if (line.startsWith("$ cd ")) {
      listFiles = false;
      const folderName = line.slice(5);
      if (folderName === "..") {
        currentFolder = folderNavStack.pop();
      } else {
        currentFolder = findFolder(
          root,
          folderNavStack[folderNavStack.length - 1],
          folderName
        );
        folderNavStack.push(currentFolder);
      }
    } else if (line.startsWith("$ ls")) {
      listFiles = true;
    } else if (listFiles && !line.startsWith("$ ")) {
      if (line.startsWith("dir ")) {
        currentFolder.children.push({
          name: line.slice(4),
          type: "directory",
          children: [],
        });
      } else {
        const [size, name] = line.split(" ");
        currentFolder.children.push({
          name,
          type: "file",
          size: Number(size),
        });
      }
    }
  });
}

function findFolder(root, node, name) {
  for (let i = 0; i < node.children.length; i++) {
    if (node.children[i].name === name) {
      return node.children[i];
    }
  }
  return root;
}

function calculateNodeSize(node, folders) {
  if (node.type === "file") {
    return node.size;
  }
  let totalSize = 0;
  node.children.forEach((childNode) => {
    totalSize = totalSize + calculateNodeSize(childNode, folders);
  });
  folders.push({ name: node.name, size: totalSize });
  return totalSize;
}

function part1(arr) {
  const root = {
    name: "/",
    type: "directory",
    children: [],
  };
  parseArray(arr, root);

  const folders = [];
  calculateNodeSize(root, folders);
  let total = 0;
  folders.forEach((folder) => {
    total = total + (folder.size <= 100000 ? folder.size : 0);
  });

  return total;
  // return JSON.stringify(root, null, "  ");
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

function part2(arr) {
  const root = {
    name: "/",
    type: "directory",
    children: [],
  };
  parseArray(arr, root);

  const folders = [];
  calculateNodeSize(root, folders);
  const min = 30000000 - (70000000 - folders[folders.length - 1].size);
  let smallest = Number.MAX_SAFE_INTEGER;
  folders.forEach((folder) => {
    if (folder.size >= min) {
      smallest = smallest > folder.size ? folder.size : smallest;
    }
  });

  return smallest;
  // return JSON.stringify(root, null, "  ");
}

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
