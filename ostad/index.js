
 /*
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

    console.log(person.addTwo()) */


/*
    // creating class (_BluePrint of an Object)
    class Person  {
        first_name = 'Jahirul'
        last_name = 'Islam'
        age = 32
        phone = 1773427087
        isBangladeshi = true
        city = "Dhaka"
        getName(){
            return `My Name is ${this.first_name} ${this.last_name}`
        }
    }

    const Person1 = new Person()
    console.log(Person1)
*/
    /*
    // class constructor
    class Person {
        constructor() {
            // Constructor is a default method
            // Constructor method executed automatically when object created
            // Constructor method can work like others method by parameter
            // constructor method can't return any result
            console.log('I am a constructor')
        }
    }
    const Person1 = new Person()
*/

/*
  // Constructor receive property
  class Add {
        constructor(a, b) {
            const sum = a+b
            console.log(sum)

        }

    }
    const result = new Add(10, 30)

 */
/*
 // Change Parameter with Constructor Method


 class Person {
     num1 = 100
     num2 = 80
     addTwo(){
         return this.num1+this.num2
     }
     constructor(a, b) {
         this.num1 = a
         this.num2 = b
     }
 }

 const person = new Person(222, 333)
 console.log(person.addTwo())

 */

 // Getter and Setter Method
/*
 class Product {
     set setPrice(value){
         this.price = value
     }
     get getPrice (){
         return this.price
     }
 }
 let product = new Product()
 product.setPrice = 1000

 console.log(product.getPrice)

 */


 /**
 // Static method gives us the power to access properties from a class without creating an Object
 // why to use static method?
  * Shared Properties (we have a class with a lot of properties inside it, we need any single of it )
  * Utility Method ( from validation, data validation, any kind of utility function we build inside a class. we don't need all of this at the same time, that's why we need to try static method to use with single method every time. )
  * Memory Efficiency (Performance advantages)




 class Person{
     static first_name ="Jahir"
     static last_name = "Islam"
     getName(){
            return `My Name is ${this.first_name} ${this.last_name}`
     }
 }

 console.log(Person.first_name + Person.last_name)

  */

 // Inheritance
 /*
    Inheritance helps us to access a class with another class
  */
 /*
 class Father {
     num1 = 33
     num2 = 55
     addTwo (){
         let sum = this.num1 + this.num2
         return sum
     }
 }
 class Son extends Father {

 }

 const son = new Son()
 console.log(son.addTwo())
  */

 // Inheritance constructor
 // constructor only in parent class
 // constructor only in parent class and pass parameter

 // constructor only in child class
 // constructor only in child class and pass parameter

 // constructor in both parent and child class
 // constructor in both class and pass parameter

 // Inheritance Static

 // OverRiding

 // Encapsulation



 function createCount(){
     let count = 0;
     const increament = (count)=>{
         return count++;
     }
     const decreament = (count)=>{
         return count--;
     }
     const getCount = (count)=>{
         return count;
     }
     return{
         increament,
         decreament,
         getCount
     }
 }