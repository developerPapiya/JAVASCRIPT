// Classes And Object in Js
// <----Prototype In jS---->

// const student = {
// fullName : "Papiya Roy",
// marks:94.4,
// printMarks:function(){
//     console.log("marks = ",this.marks);
// },
// };

// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     },
// };

// const karan = {
//     salary:50000,
// };
// const karan1 = {
//     salary:60000,
// };

// const karan2 = {
//     salary:40000,
// };

// const karan3 = {
//     salary:50000,
// };


// karan.__proto__=employee;
// karan1.__proto__=employee;
// karan2.__proto__=employee;
// karan3.__proto__=employee;


// <---Classes In JS--->
// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand= brand;
//         this.mileage = mileage;
//     }
//     start(){
//      console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner=new ToyotaCar("fortuner",10);//constructor
// console.log(fortuner);
// let Lexus=new ToyotaCar("lexus",12);//constructor
// console.log(Lexus);


// <---Inheritance in JS--->

// class parent{
//     hello(){
//         console.log("hello");
//     }
// }

// class child extends parent{}

// let obj = new child();

// class person{
//     constructor(){
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }

//     sleep(){
//         console.log("sleep");
//     }

//     work(){
//         console.log("work");
//   }
// }
// class Engineer extends person{
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let Papiyaobj= new Engineer();


// <---Using Super Keyword--->
// class person{
//     constructor(name){
//         this.species="homo sapiens";
//         this.name=name;
//     }
//     eat(){
//         console.log("eat");
//     }
//   }

// class Engineer extends person{

//       constructor(name){
//         super(name);
//       }
    
//     work(){
//         console.log("solve problems,build something");
//     }
// }
// let engObj= new Engineer("Papiya");


// <----prctice question----->
/*You are creating a website for your college.Create a class User with 
2 properties,name & email.It also has a method called viewData()
that allows user to view website data.*/

// let DATA = "secret information";

// class User {
//   constructor(name,email) {
//     this.name = name;
//     this.email=email;
//   }
//   viewData(){
//     console.log("data = ",DATA);
//   }
// }
// let student1=new User("papiya","papiya@email.com");
// let student2=new User("papai","papai@email.com");

/* create a new class called Admin which inherits from User.
Add a new method called editData to Admin  that allows it to edit website data.*/

// let DATA = "secret information";

// class User {
//   constructor(name,email) {
//     this.name = name;
//     this.email=email;
//   }
//   viewData(){
//     console.log("data = ",DATA);
//   }

// }
// class Admin extends User{
//   constructor(name,email){
//     super(name,email);
//   }
  
//   editData(){
//     DATA = "some new value";
  
//   }
// }

// let student1=new User("papiya","papiya@email.com");
// let student2=new User("papai","papai@email.com");

// let admin1 = new Admin("admin","admin@college.com");
