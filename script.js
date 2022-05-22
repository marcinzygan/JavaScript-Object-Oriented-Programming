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


// const Car = function(make , speed){
// this.make = make ;
// this.speed = speed;
// }
// //Methods
// Car.prototype.accelerate = function(){
//     this.speed += 10
//         console.log(`Going ${this.speed} km/h`);
// }
// Car.prototype.break = function(){
//     this.speed -= 5
//         console.log(`Going ${this.speed} km/h`);
// }

// const EV = function(make , speed ,charge){
// Car.call(this, make , speed);
// this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo
// }
// EV.prototype.accelerate = function(){
//     this.speed += 20
//     this.charge -= 1
//     console.log(`Tesla is going ${this.speed } km/h with a charge ${this.charge} %`);
    
// }
// const tesla =  new EV("Tesla" , 120 , 23);
// console.log(tesla);


// tesla.accelerate()
// tesla.accelerate()
// tesla.chargeBattery(50)
// tesla.accelerate()
// tesla.break()
// tesla.chargeBattery(90)
// tesla.accelerate()


///////// INHERITANCE USING ES6 CLASSES

// class PersonCl {
// constructor(firstName , birthYear){
// this.firstName = firstName
// this.birthYear = birthYear
// }
// // Method will be added to .prototype // 
// // write the methods in class object not in constructor 
// calcAge(){
//     console.log(2045 - this.birthYear);
    
// }
//    introduce = function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
    
// }
// }


// class StudentCl extends PersonCl {
//     constructor(firstName , birthYear , course){
//     // super is a costructor of parent class PersonCl
//     //Always needs to happend first , because it will set this keyword for StudentCl
//     super(firstName , birthYear);
//     this.course = course
// }

// }

// const martha = new StudentCl("Martha", 2022 , "computer science")

// console.log(martha);
// martha.introduce()
// martha.calcAge()


//////// INHERITANCE Object . create //////////////////////////

// const PersonProto = {
//     calcAge(){
//         console.log(2045 - this.birthYear);
        
//     },
//     init(firstName ,birthYear){
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// }
// const steven = Object.create(PersonProto)
// const StudentProto = Object.create(PersonProto)

// StudentProto.init = function (firstName , birthYear , course){
//     PersonProto.init.call(this , firstName , birthYear , this.course = course)
// }
// StudentProto.introduce= function(){
//     console.log(`My name is ${this.firstName} and I study ${this.course}`);
    
// }
// const jay = Object.create(StudentProto)


// jay.init("jay" , 2011 , "cooking")
// console.log(jay);
// jay.introduce()

//////////// ES6 CLASSES CD.... ////////////////

// class Account {
//     constructor(owner , currency , pin ){
//         this.owner = owner;
//         this.currency = currency;
        
//         // We can set other properties

//         //Protected property add _ as a convenction
//         this._movements = [];
//         this.pin = _pin;
//         this.locale = navigator.language
//         // we can create message in constructor too 
//         console.log(`Thank You for opening an account ${owner}`);
        

//     }
//     // Public interface 
//     getMovemens(){
//         return this._movements
//     }
//     deposit(value){
//         this._movements.push(value)
//     }
//     // We can call other function inside with this keyword
//     withdraw(value){
//         this.deposit( - value)
//     }

//     _approveLoan(value){
//         return true ;
//     }


//     requestLoan(value){
//         if(this._approveLoan(value)){
//             this.deposit(value);
//             console.log(`Loan approved for ${value}`);
            
//         }
//     }

// }   


// const acc1 = new Account("Marcin", "PLN" , 123)

// acc1.deposit(2000);
// acc1.withdraw(500)
// console.log(acc1);
// acc1.requestLoan(5000)

//////// DATA PRIVACY /////////

////class fields not YET SUPPORTED !!!! ////

// 1 PUBLIC FIELDS
// 2 PRIVATE FIELDS
// 3 PUBLIC METHODS
// 4 PRIVATE METHODS

// class Account {
//     // 1 public field added on instances not to prototype 
//     locale = navigator.language;
    
//     // 2 private fields add # we need to change that in our code aswell
//     #movements = [];
//     #pin;


//     constructor(owner , currency , pin ){
//         this.owner = owner;
//         this.currency = currency;
        
//         // Private property first we need to define it outside of constructor and then set it to pin
//         this.#pin = pin;
//         // this.locale = navigator.language
//         // we can create message in constructor too 
//         console.log(`Thank You for opening an account ${owner}`);
        

//     }
//     //3 PUBLIC METHODS not changing 
//     // Public interface 
//     getMovemens(){
//         return this.#movements
//     }
//     deposit(value){
//         this.#movements.push(value)
//         //for chaining return this
//         return this;
//     }
//     // We can call other function inside with this keyword
//     withdraw(value){
//         this.deposit( - value)
//         //for chaining return this
//         return this;
//     }

   


//     requestLoan(value){
//         if(this.#approveLoan(value)){
//             this.deposit(value);
//             console.log(`Loan approved for ${value}`);
//             //for chaining return this
//         return this;
//         }
//     }
//     //4 PRIVATE METHODS
//     #approveLoan(value){
//         return true ;
//     }
//     // Static methods works only on class itself (Account class)
//     static helper(){
//         console.log("helper");
        
//     }
// }   
// const acc1 = new Account("Marcin", "PLN" , 123)

// acc1.deposit(5000)
// acc1.requestLoan(5000)
// console.log(acc1);
// // acc1.#movements.push(2000)  not accesible as it is private !
// Account.helper()


// //CHAINING METHODS
// // return this in methods first 
// acc1.deposit(400).deposit(500).withdraw(800).requestLoan(50000)
// console.log(acc1);


/// CHALLENGE 4
/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
    constructor(make , speed){
        this.make = make;
        this.speed = speed;
    }
    accelerate(){
        this.speed += 10
        console.log(`Going ${this.speed} km/h`);
        
    }
    break(){
        this.speed -= 5
        console.log(`Going ${this.speed} km/h`);
        return this
    }
    get speedUS() {
        return  this.speed / 1.6
       
    }
    set speedUS(speed){
        this.speed = speed  * 1.6
       
    }
}

class EVCl extends CarCl {
    #charge;
    constructor(make , speed , charge){
        super(make , speed);
        this.#charge = charge
    }


    accelerate(){
        this.speed += 20
        this.#charge -= 1
        console.log(`Going ${this.speed} km/h with the charge ${this.#charge} %`);
        return this;
    }
    chargeBattery(value){
        this.#charge = value
        console.log(`Current charge is  ${this.#charge} %`);
        
    }
}

const Rivian = new EVCl("Rivian" , 120 , 23)
Rivian.chargeBattery(90)
Rivian.accelerate().break().accelerate().accelerate()
console.log(Rivian);
