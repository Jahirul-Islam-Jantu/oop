class Students {
    constructor(firstName, lastName, roll, stdClass, mobile, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.stdClass = stdClass;
        this.mobile = mobile;
        this.email = email;
    }


}
    function fetchStudents  (){
        const students = JSON.parse(localStorage.getItem('students')) || [];
        const studentTable = document.querySelector("#studentTableBody");
        studentTable.innerHTML = '';
        students.forEach((item, index)=>{
            let student = new Students(item.firstName, item.lastName, item.roll, item.stdClass, item.mobile, item.email);
            const row = `
            <tr>
                <td>${index + 1}</td>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.roll}</td>
                <td>${student.stdClass}</td>
                <td>${student.mobile}</td>
                <td>${student.email}</td>
                <td class="btn btn-sm btn-outline-danger " onclick="deleteStudent(${index})">Delete</td>
            </tr>
        `
            studentTable.innerHTML += row ;
        })

}

function deleteStudent(index){
    const students = JSON.parse(localStorage.getItem('students')) || [];
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    fetchStudents();


}








    fetchStudents();
