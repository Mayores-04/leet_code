let sum = (a, b) => a + b;
console.log(sum(2, 3));

function multiply(a, b) {
  console.log(a * b);
}

multiply(4, 5);

let date = new Date();
let birthDate = new Date("1990 01 01");
console.log(date.getMonth() + 1);
console.log(birthDate);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

console.log("Current Month:", months[date.getMonth()]);
