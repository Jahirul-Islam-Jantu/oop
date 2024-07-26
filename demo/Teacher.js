const Person = require("./demo/Person");

class Teacher extends Person {
  constructor(name, email, address, phone, subject, salary) {
    super(name, email, address, phone);
    this._subject = subject;
    this._salary = salary;
  }
  get subject() {
    return this.subject;
  }
  get salary() {
    return this.salary;
  }
}

module.exports = Teacher;
