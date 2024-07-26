const UniPerson = require("./UniPerson");

const _studentId = Symbol("studentId");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends UniPerson {
  constructor(id, name, studentId, guardian) {
    super(id, name);
    this[_studentId] = studentId;
    this[_guardian] = guardian;
    this[_exams] = [];
    this[_fee] = null;
  }
  get studentId() {
    return this[_studentId];
  }
  set studentId(value) {
    this[_studentId] = value;
  }
  get guardian() {
    return this[_guardian];
  }
  set guardian(value) {
    this[_guardian] = value;
  }
  get exams() {
    return this[_exams];
  }
  set exams(value) {
    this[_exams] = value;
  }
  addExam(exam) {
    this[_exams].push(exam);
  }
  get fee() {
    return this[_fee];
  }
  set fee(value) {
    this[_fee] = value;
  }
  toString() {
    return `${super.toString()} StudentID : ${this[_studentId]}`;
  }
}

module.exports = Student;
