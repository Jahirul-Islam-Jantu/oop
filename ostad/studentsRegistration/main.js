class Student {
  constructor(firstName, lastName, roll, stdClass, mobile, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.roll = roll;
    this.stdClass = stdClass;
    this.mobile = mobile;
    this.email = email;
  }

  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      roll: this.roll,
      stdClass: this.stdClass,
      mobile: this.mobile,
      email: this.email,
    };
  }
}

document
  .querySelector("#studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const roll = document.querySelector("#roll").value;
    const stdClass = document.querySelector("#stdClass").value;
    const mobile = document.querySelector("#mobile").value;
    const email = document.querySelector("#email").value;

    const student = new Student(
      firstName,
      lastName,
      roll,
      stdClass,
      mobile,
      email
    );

    let students = JSON.parse(localStorage.getItem("students")) || [];
    students.push(student.toJson());
    localStorage.setItem("students", JSON.stringify(students));

    document.querySelector("#studentForm").reset();
    alert("Student added successfully");
  });
