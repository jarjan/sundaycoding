function gradingStudents(grades) {
  const result = [];
  for (var grade of grades) {
    if (grade < 38 || grade % 5 < 3) {
      result.push(grade);
    } else {
      result.push(grade + 5 - (grade % 5));
    }
  }
  return result;
}

const arr = [73, 67, 38, 33];
console.log(gradingStudents(arr));

/*
  https://www.hackerrank.com/challenges/grading/problem
*/
