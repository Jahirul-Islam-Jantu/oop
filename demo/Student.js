const Person = require("./Person");
class Student extends Person {
  constructor(name, email, address, phone, subjects, fee) {
    super(name, email, address, phone);
    this._subjects = subjects;
    this._fee = fee;
  }
  get subjects() {
    return this.subjects;
  }
  get fee() {
    return this.fee;
  }
}

module.exports = Student;
