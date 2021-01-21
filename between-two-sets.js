function getTotalX(a, b) {
  const set = new Set();
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < b.length; j++) {
      set.add(b[j] / a[i]);
    }
  }
  console.log(set);
  for (var i = 0; i < a.length; i++) {
    set.delete(a[i]);
  }
  return set.size;
}

const [a, b] = [
  [2, 4],
  [16, 32, 96],
];
console.log(getTotalX(a, b));

/*
  https://www.hackerrank.com/challenges/between-two-sets/problem
*/
