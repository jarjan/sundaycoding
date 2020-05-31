/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
  let [hour, minute, second] = s.split(":");
  const isPM = second.includes("PM");
  second = second.slice(0, 2);
  if (hour == "12") {
    hour = isPM ? "12" : "00";
  } else {
    hour = isPM ? String(12 + Number(hour)) : hour;
  }

  return [hour, minute, second].join(":");
}

const s = "07:05:45PM";
console.log(timeConversion(s));

/*
  https://www.hackerrank.com/challenges/time-conversion/problem
*/
