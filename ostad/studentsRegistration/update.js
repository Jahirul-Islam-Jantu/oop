fillForm()
function fillForm(){
    let urlParams = new URLSearchParams( window.location.search);
    let id = urlParams.get('index');
    console.log(`id = ${id} `)

    let students = JSON.parse(localStorage.getItem('students'));

    if (students && students[id] ){

        document.querySelector("#firstName").value = students [id] ['firstName'] || "";
        document.querySelector("#lastName").value = students [id] ['lastName'] || "";
        document.querySelector("#roll").value = students [id] ['roll'] || "";
        document.querySelector("#stdClass").value = students [id] ['stdClass'] || "";
        document.querySelector("#mobile").value = students [id] ['mobile'] || "";
        document.querySelector("#email").value = students [id] ['email'] || "";
    }else {
        console.log('Student not found');
    }

}

