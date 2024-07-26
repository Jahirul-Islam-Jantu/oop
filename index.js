const { Guardian, Student, Teacher } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./University");
const Subjects = require("./University/Subjects");

/**
 * Guardian ID: 1
 */

const guardian = new Guardian(1, "MR. Jahirul Islam", "Engineer", 120000);

guardian.blood = "O+";
guardian.contact = new Contact({
  id: 1,
  email: "jahir@gmail.com",
  phone: "1245627525",
});
guardian.contact.address = new Address({
  id: 1,
  roadNo: "49/D",
  city: "Araihazar",
  region: "Narayangonj",
  country: "Bangladesh",
  postalCode: 1250,
});

/**
 * Student id 1
 */

const student = new Student(1, "Md. Rahim", "STD ID: 001", guardian);
student.blood = "A+";
student.contact = new Contact({
  id: 2,
  email: "rahim@gmail.com",
  phone: 2636321,
  alternativePhone: student.guardian.contact.phone,
  address: student.guardian.contact.address,
});

const department = new Department({
  id: 1,
  name: "Software Engineering",
});
student.department = department;
department.subjects = [
  new Subject(1, "C#", 25),
  new Subject(2, "C++", 24),
  new Subject(3, "JAVA", 23),
  new Subject(4, "JavaScript", 26),
];
const credit = student.department.subjects.reduce((a, b) => {
  a += b.credit;
  return a;
}, 0);

const dean = new Teacher(1, "Dr. Habibur Rahman", department.subjects[0]);
department.dean = dean;
const teacher = [
  new Teacher(2, "Mr. Jahidul Islam", department.subjects[1]),
  new Teacher(3, "Mr. Hasan Mahmud", department.subjects[2]),
  new Teacher(4, "Mr. Sharif Hasan", department.subjects[3]),
];
department.teachers = teacher;

student.addExam("Math", "Biology", "Chemistry Part 1", "Chemistry Part 2");
student.fee = 12000;
console.log(student);
