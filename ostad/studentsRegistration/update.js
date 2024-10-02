fillForm()
function fillForm(){
    let urlParams = new URLSearchParams( window.location.search);
    let id = urlParams.get('index');
    console.log(`id = ${id} `)

    let students = JSON.parse(localStorage.getItem('students'));

    if (students && students[id] ){

        document.querySelector("#updateFirstName").value = students[id] ['firstName'] || "";
        document.querySelector("#updateLastName").value = students[id] ['lastName'] || "";
        document.querySelector("#updateRoll").value = students[id] ['roll'] || "";
        document.querySelector("#updateStdClass").value = students[id] ['stdClass'] || "";
        document.querySelector("#updateMobile").value = students[id] ['mobile'] || "";
        document.querySelector("#updateEmail").value = students[id] ['email'] || "";
    }else {
        console.log('Student not found');
    }

}
class Students {
    constructor(updateFirstName, updateLastName, updateRoll, updateStdClass, updateMobile, updateEmail) {
        this.updateFirstName = updateFirstName;
        this.updateLastName = updateLastName;
        this.updateRoll = updateRoll;
        this.updateStdClass = updateStdClass;
        this.updateMobile = updateMobile;
        this.updateEmail = updateEmail;
    }
}

document.querySelector("#studentForm").addEventListener('submit', (e)=>{
    e.preventDefault();
    const updateFirstName = document.querySelector("#updateFirstName").value;
    const updateLastName = document.querySelector("#updateLastName").value;
    const updateRoll = document.querySelector("#updateRoll").value;
    const updateStdClass = document.querySelector("#updateStdClass").value;
    const updateMobile = document.querySelector("#updateMobile").value;
    const updateEmail = document.querySelector("#updateEmail").value;

    let students = JSON.parse(localStorage.getItem('students')) || [];
    let urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('index');

    if (students[id]) {
        students[id] = {
            firstName: updateFirstName,
            lastName: updateLastName,
            roll: updateRoll,
            stdClass: updateStdClass,
            mobile: updateMobile,
            email: updateEmail
        };

        localStorage.setItem('students', JSON.stringify(students));
        alert("Student Updated Successfully!");
        window.location = 'allData.html';
    } else {
        console.log('Student not found');
    }

});