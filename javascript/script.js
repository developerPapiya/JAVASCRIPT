// console.log("hello world");

// Arithmetic operators
// let a = 6;
// let b = 3;
// console.log("a =",a, "& b = ",b);
// console.log("a + b =",a + b);
// console.log("a -  =",a - b);
// console.log("a * b =",a * b);
// console.log("a / b =",a / b);

// Unary Operator
// let a = 6;
// let b = 3;
// console.log("a =",a, ", b = ",b);

// a = a - 1;
// console.log("a = ",a);

// a--;
// console.log("a = ",a);

// Asignment Operator
// let a = 5;
// let b = 2;

// a += 4;  //a = a + 4
// console.log("a = ",a);

// a -= 4;  //a = a - 4
// console.log("a = ",a);

// a *= 4;  //a = a * 4
// console.log("a = ",a);

// a /= 4;  //a = a / 4
// console.log("a = ",a);

// a %= 4;  //a = a % 4
// console.log("a = ",a);

// a **= 4;  //a = a ** 4
// console.log("a = ",a);

// comparison Operator
// let a = 5;
// let b = 2;

// console.log("a == b ", a == b);//false
// console.log("a != b ", a != b);//true
// console.log("a === b ", a === b);//false
// console.log("a !== b ", a !== b);//true
// console.log("a > b ", a > b);//true
// console.log("a < b ", a < b);//false
// console.log("a >= b ", a >= b);//true
// console.log("a <= b ", a <= b);//false

 // Logical Operators
// let a = 6;
// let b = 5;

// let cond1 = a > b;
// let cond2 = a == b;

// console.log("cond1 && cond2 = ", cond1 && cond2);//logical AND 

// console.log("cond1 || cond2 = ", cond1 || cond2);//logical OR

// console.log("!(a < b) =",!(a < b));//logical NOT

// CONDITIONAL STATEMENT
//----- if statement----->
// example-1

// let age = 20;

// if(age >=18){
//     console.log("you can vote");
// }
// if(age<18){
//     console.log("you cannot vote");
// }
// example 2
// let mode = "dark";
// let color;

// if (mode ==="dark"){
//     color = "black";
// }

// if(mode === "light"){
//     color = "white";
// }

// console.log(color);

// <------if-else statement----->
// let age = 16;

// if (age>=18){
//     console.log("you can vote");
// }
// else{
//     console.log("you cannot vote");
// }

// Find is the num odd or even

// let num =10;

// if(num % 2 === 0){
//     console.log(num,"is even");
// }

// else{
//     console.log(num,"is odd");
// }

// <-----else-if statement----->

// let mode = "purple";
// let color;

// if (mode === "dark"){
//     color = "black";
// }
// else if(mode === "blue"){
//     color = "blue";
// }
// else if (mode === "green"){
//     color = "green";
// }
// else{
//     color = "white";
// }
// console.log(color);

// <----Ternary Operator---->

// let age = 25;

// let result = age >= 18? "adult": "not adult";
// console.log(result);


// <---practice question 3--->
/*Get user to a number using prompt("Enter a number:").
check if the number is a multiple of 5 or not*/

// let data = prompt("Enter a number:");
// console.log(typeof data)
// let num_data = Number(data)
// console.log(typeof num_data)

// if(num_data % 5 === 0){
//     console.log(num_data,"is a multiple of 5");
// }
// else{
//     console.log(num_data,"is not a multiple of 5");
// }

// <----practice question 4---->
/*write a code which can give grades to students according 
to theirs scores:
90-100,A
70-89,B
60-69,C
50-59,D
0-49,F*/
// let scores = 90;
// let grade;

// if(scores >= 90 && scores <=100){
//     grade = "A";
// }
// else if(scores >= 70 && scores <= 89){
//     grade = "B";
// }
// else if(scores >= 60 && scores <= 69){
//     grade = "C";
// }
// else if (scores >= 50 && scores <= 59){
//     grade = "D";
// }else if (scores >= 0 && scores <= 49){
//     grade = "F"
// }
//     console.log(grade);

//<------ Loop in JS------>
// Using for loop

// for(let count = 1;count <= 10;count++){
//     console.log("Hello Wolrd");
// }
// calculate sum of 1 to 5
// let sum = 0;

// for(i = 1; i <= 100; i++){
//     sum = sum + i;
// }
// console.log("sum = ",sum);

// -------while loop-------
// let i = 1;

// while(i <= 10){
//     console.log("Hello World");
//     i++;
// }
//  -----do-while-----
// let i = 1;
// do{
//     console.log("Hello World");
//     i++
// }while(i <=5);

// <-----for-of loop----->
// let str = "JavaScript";

// let size = 0;
// for(let val of str){
//     console.log("val = ",val);
//     size++;
// }
// console.log("String Size =",size);

// -----for-in loop-----
// let student = {
// name : "Rhaul Kumar",
// age : 20,
// cgpa :7.5,
// isPass : true,
// }
// for(let key in student){
//     console.log("key =",key, ",value =",student[key]); 
// }
// <------Practice Question 5----->
// Print all even number from 0 to 100.
// for(let i = 0; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }
// <------practice question 6----->
/*craete a game where you start with any random game number.
Ask the user to keep guessingthe game number until the user
enters correct value*/
// let gameNum = 30;

// let userNum = prompt("Guess the game number: ");

// while(userNum != gameNum){
//     userNum = prompt("You entered the wrong number.Guess again");

// }
// console.log("congratulations, you entered the right number");

//<-----Strings in JS------>
// let str = "Apnacollege";
// console.log(str[4]);

// let object = {
//     item : "pen",
//     price : 10,
// };

// let output = `the cost of ${object.item} is ${object.price} rupess;`
// console.log(output);


// // Template Literals
// let specialString = `This is a template literals`;
// console.log(typeof specialString);

// console.log("apna\ncollege");//escape character -> /n
// console.log("apna\tcollege");

// <------String method in JS------>
// let str = "Apnacollege";
//  let newstr = str.toUpperCase();//str.toUpperCase() method
// console.log(str);
// console.log(newstr);

// let str = "APNACOLLEGE";
//  let newstr = str.toLowerCase();//str.toLowerCase() method
// console.log(str);
// console.log(newstr);

// let str ="     Apna college js    ";
// console.log(str.trim());//trim method

// <---------Practic Questions 7-------->
/*Prompt the user to enter their full name.Generate a user name for them based on the input.
Start username with @,followed by their full name and ending with fullname length.*/
//  let fullName = prompt("Enter your fullname without spaces");

//  let userName = "@" + fullName + fullName.length;
// console.log(userName);

// <-----Arrays in JS------>

// let marks = [97,82,75,64,36];
// console.log(marks);
// console.log("length =",marks.length);
// console.log(marks[0],marks[1],marks[2],marks[3],marks[4]);

// let heroes = ["ironman","thor","hulk","shaktuman","spiderman"];
// console.log(heroes);
// console.log( "length =",heroes.length);

// Arrays Indices

// <-----Looping over in Array------>
// using for loop

// let heroes = ["ironman","thor","shaktiman","spiderman","joly"];

// for(let i = 0; i < heroes.length; i++){
//     console.log(heroes[i]);  
// }

// using for-of loop
// let cities = ["delhi","pune","mumbai","hydrabad","gurgaon"];

// for(let city of cities){
//     console.log(city);
// }

// <------practice Questions 8----->
/*For a given array with marks of students ->[85,97,44,37,76,60] 
Find the average ,marks of the entire class.*/
// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let val of marks){
//     sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`); 

// <-----practice question 9------>
/* For a given with prices of 5 items-> [250,645,300,900,50]
All items have an offer of 10% off on them.Changes the array to store 
final price after applying offer*/
// let items =[250,645,300,900,50];

// for(i = 0; i < items.length; i++){
//     let offer = items[i]/10;
//     items[i] = items[i] - offer;
// }
// console.log("Price after applying offer is = ",items);

// <-----Array Methods------>
// Push() Methods

// let fruits = ["apple","mango","orange","avocado"];

// fruits.push("watermelon","cherry","lemon");// push()
// console.log(fruits);

// pop() Methods
// let fruits = ["apple","mango","orange","avocado"];

// console.log(fruits);

// let deleteditem = fruits.pop("avocado");// pop()
// console.log(fruits);
// console.log("deleted",deleteditem);

// <-----practice question 10----->
// create an array to store companies -> "Bloomberg","Microsoft","uber",
// "Google","IBM","Netflix".
// a.Remove the first company from the array
// b.Remove Uber & Add Ola in its place
// c.Remove Amazon at the end

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.shift();
// console.log(companies);

// b.Remove Uber & Add Ola in its place
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.splice(2, 1,"Ola");
// console.log(companies);

// c.Remove Amazon at the end
// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

// companies.push("Amazon");
// console.log(companies);

// <------Function in JS------>

// function myfunction(){
// console.log("i love JavaScript");
// console.log("we are learning JS");
// }
// myfunction();

// <--Function -> sum of 2 number-->

// function sum(x , y){
//    s = x + y;
//    return s;
// }
// let val = sum(2,3);
// console.log("sum is =",val);

// <----Arrows Function---->
// const arrowsum = (a , b) =>{
//     console.log(a+b);
// };

// const arrowsmul = (x,y) =>{
// console.log(x*y);
// };

// <----Practice Question---->
// create a function using the "function" keyword that  takes a 
// string as an argument & returns the number of vowels in the string
// function countvowel (str){
//   let count = 0;
//     for(const char of str){
//         if (char === "a"|| char ==="e"||char ==="i"||char ==="o"||char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
//     }
// <-----forEach Loop in Arrays----->
// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val) => {
//     console.log(val);
// });

// <-----practice question----->
/*For a given array of number, print the square of each value 
using the forEach loop*/
// let num = [2,3,4,5,6,10];

// num.forEach((num) =>{
// console.log(num*num);
// })

// <----Map Array Methods---->
// let nums= [32,44,89];

// let newArr = nums.map((val) =>{
//     return val*val;
// });
// console.log(newArr);


// <----Filter Array Methods---->
// odd Elements
// let arr = [2,3,4,5,6,7,8,9];

// let evenElement = arr.filter((val) =>{
//     return val%2 != 0;

// });
// console.log(evenElement);

// <-----practice question---->
/*we are given array of marks of student.Fiter out of the marks 
of student that scored 90.*/
// let marks = [97,64,32,92,49,78,95,90];

// let toppers = marks.filter((val) => {
//     return  val >90;
// });
// console.log(toppers);

// <----practice question---->
/*take a number n as input from user.create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
Use the reduce method to calculate product of all numbers in the array.*/

// let n = prompt("enter a number : ");

// let arr=[];

// for(i = 1; i <=n ; i++){
//     arr[i-1] = i;
// };
// console.log(arr);

// let sum = arr.reduce((res,curr) => {
// return res + curr;
// });
// console.log("sum = ",sum);

// let factorial = arr.reduce((res,curr) => {
//     return res * curr;
//     });
//     console.log("factorial =",factorial);
    

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from apna college student";

// <----practice question----->
/*craete a H2 heading element with text - "Hello JavaScript".
Append"from Apna College students" to this text using JS*/

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "from Apna College Students";
   
// <---practice question--->
// create 3 divs with common class name - "box".Access them &
// add some unique text to each of them.
// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

//<----practice question---->
/*create a new button element.Give it a text"click me",
background color of red & text color of white.
Insert the button as the first element inside the body tag.*/

// let newBtn = document.createElement("button");
// newBtn.innerText="click me!";

// newBtn.style.color = "white";
// newBtn.style.background = "red";

// document.querySelector("body").prepend(newBtn);

// let btn1 = document.querySelector('#btn1')
// console.log(btn1)

// btn1.onclick = () => {
//     let a =25;
//     console.log(a)
// }

// <----practice questions---->
/*craete a toggle button that change the screen to dark-mode when 
clicked & light - mode when clicked again*/

// let modeBtn= document.querySelector("#mode");
// let currMode = " Light";

// modeBtn.addEventListener("click",() => {
//   if (currMode=== "Light"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor ="black";
//     document.querySelector("p").style.color ="white";
//   }else{
//     currMode = "Light";
//     document.querySelector("body").style.backgroundColor ="white";
//     document.querySelector("p").style.color="black";
//   }

//   console.log(currMode);
// })



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




// chapter--callbacks,promises & Async Await---->

// Synchronous Programming---->

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("four");
// console.log("five");
// console.log("six");

// Asynchronous Programming---->
// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() =>{
//   console.log("hello");
// },4000);

// console.log("four");
// console.log("five");
// console.log("six");

// <----Callback in JS---->
// function sum(a, b){
//   console.log(a+b);
// }
// function calculator(a, b, sumvalue){
//   sumvalue(a, b);
// }
// calculator(1, 2,sum);

// function getData(dataId,getNextData){

//   setTimeout(() => {
//     console.log("data",dataId);
//     if(getNextData){
//       getNextData();
//     }
//   },2000);
// }

// // callback-hell
// getData(1,() => {
//   getData(2,() => {
//     getData(3,() => {
//       getData(4,() => {
//         getData(5);
//       });
//     });
//   });
// });


// <----Promises in js----->
// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise");
//         // resolve("success");
//         reject("network error");
//     });
// };

// let promise=getPromise();
// promise.then((res)=>{
//     console.log("promise fulfiled",res);
// });

// promise.catch((err)=>{
//     console.log("rejected",err);
// })

// <----promise chain--->

// function asyncFunc1 (){
//     return new Promise ((resolve,reject)=>{
// setTimeout(()=>{
// console.log("data1");
// resolve("success");
// },4000);
//     });
// }

// function asyncFunc2 (){
//     return new Promise ((resolve,reject)=>{
// setTimeout(()=>{
// console.log("data2");
// resolve("success");
// },4000);
//     });
// }

// console.log("fetching data1....");
// asyncFunc1.then((res)=>{
//     console.log("fetching data2....");
//     asyncFunc2.then((res)=>{});
// });






// function getData(dataId){
//     return new  Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             // reject("error");
//           },2000);
//     });
// }

// // Async -Await
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
   
   
// };

// (async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
   
// })();

// callback-hell
// getData(1,() => {
//   getData(2,() => {
//     getData(3,() => {
//       getData(4,() => {
//         getData(5);
//       });
//     });
//   });
// });

// Callback in js

// function mul(x,y){
//     console.log("result is =",x*y);
// }

// function calculator(mul){
//     mul(5,6);
// }

// <----Async-Await in JS---->

// function api(){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             console.log("Weather data");
//         resolve(200);
//         },3000);
//     });
    
// }

// function api(){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=>{
//             console.log("Weather data");
//         resolve(200);
//         },3000);
//     });
// }


// async function getWheater() {
//    await api();//1st
//    await api();//2nd
//    await api();//3rd
//    await api();//4th
// }
 

