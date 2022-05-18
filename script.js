'use strict';

// const Person = function(firstName , birthYear){
// // instance properties    
// this.firstName = firstName;
// this.birthYear = birthYear;

// //NEVER DO THIS as it will create function for each object .
// // this.calcAge = function () {
// //     console.log(2022 - this.birthYear);
    
// // }

// }

// const jonas = new Person("Jonas" , 1991)

//New {} is created 
// // function is called , this keyword = {}
// // {} linked to prototype 
// // function automatically return {}

// ////////////// Prototypes
// // console.log(Person.prototype);

// // Person.prototype.calcAge = function(){
// //     console.log(2022 - this.birthYear);
    
// // }
// // jonas.calcAge()

// // const arr = [1,4,6,8,9,0,11]
// // console.log(arr.__proto__);

// // // CHALLENGE 1 

// // /* 
// // 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// // 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// // 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// // 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// // DATA CAR 1: 'BMW' going at 120 km/h
// // DATA CAR 2: 'Mercedes' going at 95 km/h

// // GOOD LUCK 😀
// // */

// // const Car = function(make , speed){
// //     this.make = make;
// //     this.speed = speed;
// // }

// // Car.prototype.accelerate = function(){
// // this.speed = this.speed + 10 ;
// // console.log(`${this.speed} km/h`);

// // }
// // Car.prototype.break = function(){
// //     this.speed = this.speed -5 ;
// //     console.log(`${this.speed}km/h`);
    
// // }
// // const BMW = new Car("BMW",120)
// // const Mercedes = new Car("Mercedes", 95)

// // BMW.accelerate()
// // BMW.accelerate()
// // BMW.accelerate()
// // BMW.accelerate()
// // BMW.break()
// // Mercedes.accelerate()
// // Mercedes.break()
// // //// ES6 CLASSES
// // //class expression
// // // const PersonCl = class{}
// // //class declaration

// // // class PersonCl {
// // // constructor(firstName , birthYear){
// // // this.firstName = firstName
// // // this.birthYear = birthYear
// // // }
// // // // Method will be added to .prototype // 
// // // // write the methods in class object not in constructor 
// // // calcAge(){
// // //     console.log(2045 - this.birthYear);
    
// // // }
// // // }

// // // const jessica = new PersonCl ("Jessica" , 1991)
// // // console.log(jessica);

// // // You can still declare methods like this for classes.
// // // PersonCl.prototype.greet = function (){
// // //     console.log(`Hello ${this.firstName}`);
// // // }
// // // jessica.greet()

// // // GETTERS AND SETTERS 

// // const account = {
// //     owner: "marcin",
// //     movements: [200,300 ,500 ,899],
    
// //     get latest(){
// //         return this.movements.slice(-1).pop()
// //     },

// //     set latest(mov){
// //         this.movements.push(mov)
// //     }
// // }
// // console.log(account.latest);
// // account.latest =50;
// // console.log(account.movements);

// // Classes have Setters and Getters also
// class PersonCl {
//     constructor(fullName , birthYear){
//     this.fullName = fullName
//     this.birthYear = birthYear
//     }
//     // instance methods will be added to prototype
//     calcAge(){
//         console.log(2045 - this.birthYear);
        
//     }
//     get age(){
//         return 2037 - this.birthYear
//     }
//     // setting property that already exist will give us an error
//     // to fix that we need to use _ as a convenction and then get fullName with a getter
//     set fullName(name){
        
        
//         if (name.includes(" "))
//             this._fullName = name
//         else{
//             alert(`${name} is not a full name`)
//         }
        
//     }
//     get fullName(){
//         return this._fullName
//     }
//     //static method in class 
//     static hey (){
//         console.log("hey there ");
//     }
//     }
//     const jessica = new PersonCl ("Jessica Davis" , 1991)
// //now we can acces fullName it is computed by getter the accual fullName is still called _fullName
//     console.log(jessica.fullName);
    
// console.log(jessica);

// console.log(jessica.age);
// const walter = new PersonCl("Walter White", 1991)
// console.log(walter.fullName);
// // STATIC METHODS

// const Person = function(firstName , birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;

    
    
//     }
//     Person.hey = function(){
//         console.log("hey there ");
        
//     }
// /// Object . create

// const PersonProto = {
//     calcAge(){
//         console.log(2045 - this.birthYear);
        
//     }
// }
// const steven = Object.create(PersonProto)
// console.log(steven);
///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/


// class CarCl {
//     constructor(make , speed){
//         this.make = make;
//         this.speed = speed;
//     }
//     accelerate(){
//         this.speed += 10
//         console.log(`Going ${this.speed} km/h`);
        
//     }
//     break(){
//         this.speed -= 5
//         console.log(`Going ${this.speed} km/h`);
//     }
//     get speedUS() {
//         return  this.speed / 1.6
       
//     }
//     set speedUS(speed){
//         this.speed = speed  * 1.6
       
//     }
// }

// const ford = new CarCl("Ford" , 120)

// ford.accelerate()
// ford.accelerate()
// ford.accelerate()



//INHERITANCE BETWEEN CLASSES

// USING CONSTRUCTOR FUNCTIONS 

// const Person = function(firstName , birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
// }
// Person.prototype.calcAge = function(){
//     console.log(2043 - this.birthYear);
     
// }

// const Student = function(firstName , birthYear , course){
//     //access person function and its properties and set this keyword to current object(Student)
//     Person.call(this , firstName , birthYear)

//     //Do not reapet code princilple
//     // this.firstName  = firstName;
//     // this.birthYear= birthYear;
//     this.course = course ;
// }
// //manually create prototype inheritance from Person object
// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function(){
//     console.log(`My mane is ${this.firstName} and I study ${this.course}`);
    
// }
// const mike = new Student("Mike", 2020 , "Computer Science")
// console.log(mike);
// mike.introduce()
// mike.calcAge()

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// console.log(mike.__proto__);


///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/


const Car = function(make , speed){
this.make = make ;
this.speed = speed;
}
//Methods
Car.prototype.accelerate = function(){
    this.speed += 10
        console.log(`Going ${this.speed} km/h`);
}
Car.prototype.break = function(){
    this.speed -= 5
        console.log(`Going ${this.speed} km/h`);
}

const EV = function(make , speed ,charge){
Car.call(this, make , speed);
this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo
}
EV.prototype.accelerate = function(){
    this.speed += 20
    this.charge -= 1
    console.log(`Tesla is going ${this.speed } km/h with a charge ${this.charge} %`);
    
}
const tesla =  new EV("Tesla" , 120 , 23);
console.log(tesla);


tesla.accelerate()
tesla.accelerate()
tesla.chargeBattery(50)
tesla.accelerate()
tesla.break()
tesla.chargeBattery(90)
tesla.accelerate()