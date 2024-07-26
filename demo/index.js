const Person = require("./Person");
const Teacher = require("../Teacher");
const Student = require("./Student");

const p = new Person(
  "Jahirul",
  "jahirulislam@yahoo.com",
  "Dhaka",
  "01773427087"
);
const t = new Teacher(
  "Jahirul Islam",
  "jahir@gmail.com",
  "Rajshahi",
  "01912356260",
  "Physics",
  100000
);
const s = new Student(
  "Tawhid",
  "tawhid@gmail.com",
  "Dhaka",
  "01858956595",
  ["Physics", "Math", "Chemistry"],
  3000
);

console.log(p);
console.log(t);
console.log(s);
