    // Object creating with Object instance

    let person =new Object();
    person.first_name = 'Jahirul';
    person.last_name = 'Islam';
    person.age = 32;
    person.address = '127.0.0.1';
    person.city = 'Dhaka';
    person.is_active = true;
    person.addTwo =( )=>{
        return ` My Name is ${person.first_name} ${person.last_name}`
    }

    console.log(person.addTwo())
