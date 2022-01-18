// function Person(first, last, age, gender, interests) {
//     this.name = {
//         first: first,
//         last: last
//     };
//     this.age = age;
//     this.gender = gender;
//     this.interests = interests;
//     this.bio = function () {
//         alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
//     };
//     this.greeting = function () {
//         alert('Hi! I\'m ' + this.name.first + '.');
//     };
// }
// let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
// person1.bio()

// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails() {
//         return `The name of the bike is ${this.name}.`;
//     }
// }

// let bike1 = new Vehicle("Hayabusa", "Suzuki", "1340cc");
// let bike2 = new Vehicle("Ninja", "Kawasaki", "998cc");

// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());


// class person {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//     }
//     add_Address(add) {
//         this.add = add;
//     }
//     getDetails() {
//         console.log(`Name is ${this.name},Address is: ${this.add}`);
//     }
// }
// let person1 = new person("Raj", 21);
// person1.add_Address("Surat");
// person1.getDetails();
// Inhertiance
// class person {
//     constructor(name) {
//         this.name = name;
//     }
//     //method to return the string
//     toString() {
//         return `Name of person: ${this.name}`;
//     }
// }
// class student extends person {
//     constructor(name, id) {
//         //super keyword to for calling above class constructor

//         this.id = id;
//         super(name);
//     }
//     toString() {
//         return `${super.toString()},Student ID: ${this.id}`;
//     }
// }
// let student1 = new student("Raj", 22);
// console.log(student1.toString());

// var studentIDs = [30, 10, 20, 5, 100]
// studentIDs.sort(function (num1, num2) {
//     return num1 - num2;
// });

// // console.log(studentIDs);
// asynchoenous language
// function first() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     setTimeout(function () {
//         console.log(4);
//     }, 2000);
//     console.log(5);
// }
// function second() {
//     console.log(6);
// }
// first();
// second();

// const promise = new Promise(function (resolve, reject) { })
// console.log(promise)

// var promise = new Promise(function (resolve, reject) {
//     const x = "google";
//     const y = "google";
//     if (x != y) {
//         resolve();
//     } else {
//         reject();
//     }
// });
// promise
//     .then(function () {
//         console.log("Success, You are a developer");
//     })
//     .catch(function () {
//         console.log("Some error has occured");
//     });

// console.log(promise)