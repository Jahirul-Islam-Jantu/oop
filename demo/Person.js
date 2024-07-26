class Person {
  constructor(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
  }
  changeName(name) {
    this.name = name;
  }

  print() {
    // console.log(this);
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }

  setName(name) {
    this.name = name;
  }
  setEmail(email) {
    this.email = email;
  }
  _sanitizeMsg(msg) {
    return msg.trim().toLowerCase();
  }
  static isValid(age) {
    return age >= 18;
  }
  static equal(p1, p2) {
    if (p1.name !== p2.name) return false;
    if (p1.email !== p2.email) return false;

    return true;
  }
}

module.exports = Person;
