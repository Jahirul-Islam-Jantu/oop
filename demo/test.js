class Person {
  constructor(name, email, address, phone) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    // console.log(this);
  }
  //   changeName(name) {
  //     this.name = name;
  //   }
  sendMail(msg = "hello") {
    console.log("to", this.email);
    console.log("Sending Mail");
    console.log("MSG", this._sanitizeMsg(msg));
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

const p1 = new Person(
  "Jahirul islam",
  "jahirulislam@gmail.com",
  "dhaka",
  "01773427087"
);
const p2 = new Person("jahir", "jantu@gmail.com", "rangpur", "01771177141");
const p3 = new Person("keya", "keya@gmail.com", "shylet", "0177755541");
const p4 = new Person(
  "sahana",
  "sahana@gmail.com",
  "narayangonj",
  "01770235522"
);
const p5 = new Person("tawhid", "tawhid@gmail.com", "coxs", "01772451323");
const p7 = new Person("tawhid", "tawhid@gmail.com", "coxs", "01772451323");

const p6 = new Person("shayan", "shayan@gmail.com", "kurigram", "01725451366");

p1.setName("jahirul Islam");
p1.setEmail("jahirulIslam@abc.com");
// p1.print();
// p4.print();

// p1.changeName("jantu");
// p4.changeName("jahirul742682");

// p1.sendMail();

// p1.print();
// p4.print();

// console.log(p1.getName(), p1.getEmail());
// p1.sendMail("            WOW! It is working!             ");

const testUser = {
  name: "Test",
  email: "test@xyz.com",
  address: "Dhaka",
  phone: "0144778833",
  age: 30,
};

let person5 = null;

if (Person.isValid(testUser.age)) {
  person5 = new Person(
    testUser.name,
    testUser.email,
    testUser.address,
    testUser.phone
  );
}
// console.log(person5);

console.log(Person.equal(p5, p7));
