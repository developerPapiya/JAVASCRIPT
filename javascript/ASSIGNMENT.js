// Q1. Write a function to reverse a given string.

// function reverseString(str){
//     let output='';
//     for(let i=str.length-1; i >=0; i--){
//         output += str[i];

//     }
//     return output;
// }
// const reversedString= reverseString("Hello World!");
// console.log(reversedString);

//
//Q2. write a function to convert a string to uppercase.
//  function convertString(str){
//     return str.toUpperCase();

//  }
// const result=convertString("javascript");
// console.log(result);

// Q3. write a function to convert a string toLowerCase.

// function convertString(str){
//     return str.toLowerCase();

// }
// const result=convertString("HELLO WORLD");
// console.log(result);

/* Q4. write a function to check if a string contains
 a specific substring.*/
//   function containSring(str,subString){
//    return str.includes(subString);
//   }
//   const result=containSring("Hello World","Hello");
//   console.log(result);

/* Q5. write a function to replace all occurrences of a
 substring with a new string*/

// function replaceSring(str,subStr){
//     return str.replaceAll(subStr,"Hello Mr.")
// }

// const newString=replaceSring("Hello Miss, how are you?" ,"Hello Miss,");
// console.log(newString);

// Q6. Write a function to extract the first word from a string.

//  function getFirstWord(str){
//     let output=str.split('');

//     return output[0];
//  }

//  const firstWord=getFirstWord("Hello World");
//  console.log(firstWord);

// Q7. Write a function to extract the last word from a string.

//  function getLastWord(str){

//     let output=str.split('');
//     return  output[output.length-1];
//  }

//  const lastWord=getLastWord("Hello World");
//  console.log(lastWord);

// Q8. Write a function to remove all whitespace from a string.
//  function removeAllWhitespace(str){
//     return str.replace(/\s+/g,'');
//  }
//  console.log(removeAllWhitespace(" Hello Developers "));

// Q9. Write a function to count the number of vowels in a string.

//  function countVowels(str){

//     let count=0;
//     for(let i=0; i < str.length; i++){
//         if(str[i]==="a" ||str[i]==="e"||str[i]==="i"||
//             str[i]==="o"||str[i]==="u"||str[i]==="A"||
//             str[i]==="E"||str[i]==="I"||str[i]==="O"||
//             str[i]==="U"){
//             count++;
//         }
//     }
//     return count;
//  }
//  const result=countVowels("Hello Developers");
//  console.log(`Number of vowels is = ${result}`);

//Q10. Write a function to check if a string is a palindrome.

// function checkPalindrome(str){
//   return str == str.split('').reverse().join('');
// }

// const ispalindrome= checkPalindrome("noon");
// console.log(ispalindrome);

// Array
// Q1. Write a function to reverse an array.
// function reverseArray(arr){
//     return arr.reverse()
// }
// const reversedArr= reverseArray([1,2,3,4,5,6,7])
// console.log(reversedArr);

// Q2. Write a function to flatten a nested array.

// function flattenArray(arr){
//     return arr.flat(Infinity)
// }
// const nestedArray=[1,[3,[5,[7,8],6],4],2];
// const finalArray=flattenArray(nestedArray);
// console.log(finalArray);

// Q3. Write a function to remove duplicates from an array.

// function removeDuplicates (arr){
//   return  [ ...new Set(arr)];

// }
// const allval = [1,2,3,4,5,5,6,7,3];
// const finalArray = removeDuplicates(allval);
// console.log(finalArray);

// Q4. Write a function to find the index of a specific element in an array.

// function specificElement(arr,element){
//   return arr.indexOf(element);
// }
// const arr=[45,78,23,96,36,79,89,67,56];
// const getSpecificElement=specificElement(arr,89);
// console.log(getSpecificElement);

// Q5. Write a function to extract all even numbers from an array.

// function extractEvenNumber(arr){

//  let evenNumber=[];

//  for(let i=0 ;i< arr.length; i++){
//     if(arr[i] %2 === 0){
//       evenNumber.push(arr[i]);
//     }
//  }
//  return evenNumber;
//  }
//  const arr=[23,75,78,44,35,24,96,46,33,95,47];
//  const allEvenNum=extractEvenNumber(arr);
//  console.log(allEvenNum);

// Q6. Write a function to extract all odd numbers from an array.

// function extractrOddNumber(arr){

//   let oddArray=[];

//   for(let i=0; i<arr.length;i++){

//     if(arr[i]%2 !==0){
//       oddArray.push(arr[i]);
//     }
//   }
//   return oddArray;
// }
// const arr=[243,789,346,809,234,896,897,324,235,567,];
// const allOddNUM= extractrOddNumber(arr);
// console.log(allOddNUM);

// Q7. Write a function to find the maximum value in an array.

// function getMaximumValue(arr){

//   let maximumValue=arr[0];

//   for(let i=1; i<arr.length; i++){
//     if(arr[i] > maximumValue){
//       maximumValue=arr[i]
//     }
//   }
//   return maximumValue;

// }
// const arr=[100,300,200,700,400,900,600];
// const result=getMaximumValue(arr);
// console.log(result);

// Q8. Write a function to find the minimum value in  an array.

// function getMinimumValue(arr){

//   let minimumValue=arr[0];
//    for(let i =0; i<arr.length; i++){
//     if(arr[i] < minimumValue){
//       minimumValue=arr[i];
//     }
//    }
//    return minimumValue;
// }
// const value=[200,600,900,400,,300,100];
// const result=getMinimumValue(value);
// console.log(result);

// Q9. Write a function to sum all numbers in an array.
//  function sumAllNumbers(arr){

//   let sum =0;

//   for(let i=0; i<arr.length; i++){

//     sum +=arr[i];
//   }
//   return sum;
//  }
//  const finalResult= sumAllNumbers([32,56,45,89,45,34,32,57]);
//  console.log(finalResult);

// Q10.Write a function to find the average of all numbers in an array.

// function getAvgOfAllNumbers(num){

//   let sum=0;

//   for(let val of num){
//     sum += val;
//   }

//   let average = sum/num.length;

//   return average;
// }
// const finalResult = getAvgOfAllNumbers([57,87,66,92,49,37,86,50,61]);
// console.log("Average:",finalResult);

// 1. Write a program to show hello world in js.

// console.log("hello world");

// 2. Write a program to print sum of two numbers.
// function getSumOfTwoNum(a,b){
//   return a+b;
// }
// let a = 20;
// let b = 30;

// const sum = getSumOfTwoNum(a,b);
// console.log("Sum of two number is:",sum);

// 3. Write a program to compare two numbers using if else .
//  let num1 = 72;
//  let num2 =49;

//   if(num1 > num2){
//     console.log(`${num1} is greater then ${num2}`);
//   }
//   else{
//     console.log(`${num1} is less then ${num2}`);
//   }

// 4. Write a program to print numbers using switch case.
// const number = 8;

// switch(number){
//   case 1:
//     console.log(" you enterd 1");
//     break;
//   case 2:
//     console.log("you enterd 2");
//     break;
//   case 3:
//     console.log("you enterd 3");
//     break;
//   case 4:
//     console.log("you enterd 4");
//     break;
//   case 5:
//     console.log("you enterd 5");
//     break;
//   case 6:
//     console.log("you enterd 6");
//     break;
//   case 7:
//     console.log("you enterd 7");
//     break;
//   case 8:
//     console.log("you enterd 8");
//     break;
//   case 9:
//     console.log("you enterd 9");
//     break;
//   case 10:
//     console.log("you enterd 10");
//     break;

//     default:
//       console.log("Invalid");
// }

// 5. Print all even numbers using while loop.

// const limit =25;
// function printAllEvenNum (limit){
//    let evenNumber= 2;

//    while(evenNumber <= limit){
//     console.log(evenNumber);
//     evenNumber += 2;
//    }

// }
//   printAllEvenNum(limit);

// 6. Write a program to print the pattern
// *
// **
// *

// function printPattern(){

//    for(let i = 1; i <= 2; i++){
//     let asteriks = '';
//     for(let j = 1; j <= i; j++){
//       asteriks += '*';
//     }
//     console.log(asteriks);
//    }

//    for(let i = 1; i >=1; i--){
//     let asteriks ='';
//     for(let j = 1; j <= i; j++){
//       asteriks += '*';
//     }
//     console.log(asteriks);
//    }

// }
// printPattern();

// 7. Write a program to print the pattern
//   *
//  *
// *

// function printPattern(){

//   for(let i = 1; i <= 3; i++){
//     let asteriks ='';

//     for(let j = 1; j <= 3 - i; j++){
//       asteriks += ' ';
//     }
//     asteriks += '*';
//     console.log(asteriks);
//   }

// }
// printPattern();

// 8. Use js to lowercase and uppercase a string.
//  Lowercae String
// function lowercaseString(str){
//   return str.toLowerCase();

// }
// const finalSring = lowercaseString("HELLO WORLD!");
// console.log(finalSring);

// Uppercase String

// function uppercaseString(str){
//   return str.toUpperCase();

// }
// const result = uppercaseString("hello world!");
// console.log(result);

// 9. Explain what are break and continue keywords.

// break keyword: break keyword used to exits the loop entirly.

//  for(let i =0; i <= 10; i++){
//   if (i === 5){
//     break;
//   }
//   console.log(i);
//  }

/* continue: the continue keywords is used to skip the current iteretion of a loop 
and go to the next iteretion*/

// for(let i = 0; i <= 10; i++){

//   if(i ===5){
//     continue;
//   }
//   console.log(i);
// }

// 10. what is an object data type and how it is different from array datatype.
//  Object Data Type
//  const employee={
//   name:"Adam",
//   age:28,
//   job:"Engineer",
//   address:"bengaluru",
//   email:"adam@ gmail.com"
//  }
//  console.log(employee);
//  console.log(employee.name);
//  console.log(employee.job);

// Array Data Type

// const employees = ["Adam","casy","peter","bob","Alice"];
// console.log(employees);
// console.log(employees[4]);
// console.log(employees[2]);

// 11. how to convert a string to integer.

// let str = "1234";
// let number = parseInt(str);
// console.log(number);

// 12. difference between switch case and if else.
// Switch case
// let day = 5;
// switch(day){
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//     default:{
//       console.log("Invalid");
//     }

// }

// if - else statement

// let marks = 88;

// if (marks >= 90 && marks <= 100){
//   console.log( "Grade: A");
// }
// else if(marks >= 80 && marks <=89){
//   console.log("Grade: B");
// }
// else if( marks >= 70 && marks <= 79){
//   console.log("Grade: C");
// }
// else{
//   console.log("Grade: D");
// }

// 13. Write a program to concatenate a string and a number variable.

// function concatenateStrAndNum(str,num){
//   return str + num;
// }
// const str = "My age is: ";
// const num = 30;
// const result = concatenateStrAndNum(str,num);
// console.log(result);

/* 14. write a simple program to compare if two strings are equal by length
 or equal by value, if anything out of the two is okay print equal.*/

//  function compareTwoString(str1,str2){

//   if(str1 === str2 || str1.length === str2.length){
//     console.log("equal");
//   }else{
//     console.log("not equal");
//   }
//  }
//  const str1 = "Hello";
//  const str2 = "WOrld";
//  compareTwoString(str1,str2);

//  const str3 = "Hello";
//  const str4 = "Javascript";
//  compareTwoString(str3,str4);

/* 15. arr = ["ramesh", "mukta","satchi","rabi","sunandan","ayan","biswadeep"]
find all strings from this array which has "an" in it using while loop and print
in same above program instead of printing all strings with "an" push it into a new array and print array.*/

// let arr = [
//   "ramesh",
//   "mukta",
//   "satchi",
//   "rabi",
//   "sunandan",
//   "ayan",
//   "biswadeep",
// ];

// let i = 0;
// let newArr = [];

// while (i < arr.length) {
//   if (arr[i].includes("an")) {
//     console.log(arr[i]);
//     newArr.push(arr[i]);
//   }
//   i++;
// }
// console.log(newArr);

// 16. what is function . write a program to find the age of a person with dob as parameter in function.

// 17. what is recursive function .Write program to find factorial of number using for loop and recursive function.
// Using for loop
// function findFactorialNumber(num){
//    let output = 1;

//    for(let i = 1; i <= num; i++){
//     output *= i;
//    }
//    return output;
// }
// console.log(findFactorialNumber(6));

// Using recursive function
// function findFactorialUsingRecursive(num){

//   if(num === 0){
//     return 1;
//   }
//   return num * findFactorialUsingRecursive(num -1);
// }
// console.log(findFactorialUsingRecursive(5));

/*18. Write programs to find square root, square, ceiling of a decimal number, 
rounding a decimal number, floor of decimal number, power of 3 of a number.*/
// Find Square root
// function findSquareRoot(number){
//     return Math.sqrt(number);
// }
// console.log(findSquareRoot(5));

// FInd Square
// function findSquare(num){
//     return num * num;
// }
// console.log(findSquare(8));

// Ceiling of Decimal Number
// function ceiling(num){
//     return Math.ceil(num);
// }
// console.log(ceiling(9.3));

// Rounding of a Decimal Number
// function findRounding(num){
//     return Math.round(num);

// }
// console.log(findRounding(7.7));
// console.log(findRounding(5.4));

// Floor of a Decimal Number
// function findFloor(num){
//     return Math.floor(num);
//  }
// console.log(findFloor(8.9));

//  Power of 3 of a number
// function findPowerOfNum(num){
//     return Math.pow(num,3);
// }
// console.log(findPowerOfNum(3));

// 19. write a program to find all permutations of a string "suj".

// 20. write a program to return square of all numbers in an array.
// function squareArray(arr){
//     let squareArr = arr.map((num) =>{
//         return num*num;
//     });
//     return squareArr;
// }
// const num = [1,2,3,4,5,6];
// const squaredNumber = squareArray(num);
// console.log(squaredNumber);

// 21. write a program to filter all numbers which are divisible by seven from an array .

// function filterAllNumDivisibleBySeven(num){
//     return num.filter((num)=>{
//      return  num % 7 ===0;
//     });
// }
// const array = [12,35,21,47,49,50,56,80,72];
// const finalArr = filterAllNumDivisibleBySeven(array);
// console.log(finalArr);

// 22. what is class and class variable, what is object and what is interface.

//----Class----
// class user{
//   constructor(username,age,email,password){
//     this.username = username;
//     this.age = age;
//     this.email = email;
//     this.password = password;
//   }
//   logMe(){
//       console.log(`Username: ${this.username}`);
//       console.log(`Age: ${this.age}`);
//       console.log(`Email: ${this.email}`);
//       console.log(`Password: ${this.password}`)
//   }
// }
// const user1 = new user("Adam","30","adam@gmail.com","123");
// user1.logMe();

//---object---
// const employees ={
//   name : "chetan",
//   age : 28,
//   job : "engineer",
// }
// console.log("Employee Name:",employees.name);

// 23. write a program to swap the two elements in the list.
// Input : List = [23, 65, 19, 90], pos1 = 1, pos2 = 3
// Output : [19, 65, 23, 90]

// function swapTwoElement(list,pos1,pos2){
//     if(pos1 < 0 || pos2 < 0 ){
//         console.log("invalid  indices");
//         return;
//     }
//     const temp = list[pos1];
//     list[pos1] = list[pos2];
//     list[pos2] = temp;
// }
// const arrList = [23,65,19,90];
// console.log("Before swap:",arrList)
//  swapTwoElement(arrList,1,3);
// console.log("After Swap:",arrList);

// write a program to print all roman numeral from 1 to 40
// JS

// function convertNumToRoman(num) {
//   const romanNumeral = {
//     ones: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//     tens: ["", "X", "XX", "XXX", "XL", "L"],
//   };

//   let ones = num % 10;
//   let tens = Math.floor(num / 10);

//   return romanNumeral.tens[tens] + romanNumeral.ones[ones];
// }

// function printAllRomanNumeral() {
//   for (let i = 1; i <= 40; i++) {
//     console.log(`${i}: ${convertNumToRoman(i)}`);
//   }
// }
// printAllRomanNumeral();

// 24. what is hoisting in js: https://www.youtube.com/watch?v=_FmHfOqJ4SY.
//Function Hosting
// greet ()

// function greet(){
//   console.log("Hello World");
// }

// //Variable Hosting

// console.log(a);

// var a = 10;//Declaration hosted to the top  but initialization is not
// console.log(a)

// console.log(b);
// let b = 9;

// logMe ()
// let logMe = function (){  //function expression and class expression are not hosted.
//   console.log("Good Morning");
// }

// 25. all comparison operators programs using if else and logical operators.

// function allComparisonOperators(x,y){
//  // Equal to (=)
//  if(x == y){
//     console.log(`${x}is equal to ${y}`);
//  }else{
//     console.log(`${x} not equal to ${y}`)
//  }

//  //strict equal to (===)
//  if (x === "y"){
//     console.log(`${x} is equal to ${y}`);
//  }else{
//     console.log(`${x} not equal to ${y}`);
//  }

//  //Greater than (>)
//  if(x > y){
//     console.log(`${x}is greater than ${y}`);
//  }else{
//     console.log(`${x}is less than${y}`);
//  }

//  //Less than (<)
//  if(x < y){
//     console.log(`${x} is less than ${y}`);
//  }else{
//     console.log(`${x} is greater than ${y}`)
//  }

//  //Greater than equal to (>=)
// if(x >= y){
//     console.log(`${x} is greater than or equal to ${y}`);
// }else{
//     console.log(`${x} is not greater than or equal to ${y}`);
// }

// //Less than equal to (<=)
// if(x <= y){
//     console.log(`${x} is less than or equal to ${y}`);
// }else{
//     console.log(`${x} is not less than or equal to ${y}`);
// }

// //Logical AND (&&)
// if(x > 50  && y > 50){
//     console.log(` Both ${x} and ${y} are greater than 50 `);
// }else{
//     console.log(`both ${x} and ${y} are not greater than 50`)
// }

// //Logical OR (||)
// if(x > 0  || y > 0){
//     console.log(`At least one of ${x} or ${y} is greater than 0`);
// }else{
//     console.log(`Neither ${x} nor ${y}  is greater than 0`)
// }

// //Logical NOT (!)
// if(!(x = y)){
//     console.log(`${x} is not equal to ${y}`);
// }else{
//     console.log(`${x} equal to ${y}`);
// }

// }
// allComparisonOperators(10,30);

// 26. write a program to return square of all numbers in an array
// //  using map function of array.

// function squareOfAllNumbers(arr){
//     return arr.map(number => number*number);
// }
// const array = [2,3,4,5,6,7];
// const squareArr = squareOfAllNumbers(array);
// console.log(squareArr);

// 27. write a program to filter all numbers which are divisible by seven from an array
// using filter method of array.

// function filterNumbersDivisibleBySeven(numbers){

//     return numbers.filter(num => num % 7 === 0);
// }
// const numbers = [23,56,43,21,88,49,55,63,72,35];
// console.log(filterNumbersDivisibleBySeven(numbers));

// 28. what is settimeout in js and setinterval in js: https://www.youtube.com/watch?v=Ruq4sEw9h_8

//setTimeOut - Runs after specified delay
// alert("hello");

// let a = setTimeout(() => {
//   alert("I am in the settimeout");
// }, 3000);

// clearTimeout(a);
// console.log(a);

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() =>{
//   console.log("four");
//   console.log("five");
//   console.log("six");
// },4000);

//setInterval - Runs repeatedly at specified interval
// setInterval(()=>{
//  console.log("setinterval");
// },2000);

// 29. what are js promises. give an example of js callback and js promises
//JS Promises : A Promises in Javascript is an object that represent the eventual
// completition of an asynchronous operation. It is a solution to callback hell.

//  let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const data = "successfully";
//       resolve(data);
// reject(data);
//   }, 2000);
// });

// promise.then((data) => {
//   console.log("Data received:", data);
// })
// .catch((err) => {
//   console.error("Error fetching data:", err);
// });

//Callback
// function sum(a,b){
//   console.log(a+b);
// }

// // function calculate(a,b,sum){
// //   sum(a,b);
// // }

// //  calculate(3,6,sum);

// 30. write a foreach loop to print index and array element in js
// function printArrAndIndexElement(fruits){

// fruits.forEach((element,index) => {
//     console.log(`Index:${index}, Element: ${element}`);
// });

// }
// const fruits = ["apple","mango","banana","avocado","litchi","cherry"];
// printArrAndIndexElement(fruits);







// 31. lexical scope: https://www.youtube.com/watch?v=CNk33k5nScg

// function outer() {
//   let username = "papiya";
//   console.log(username);

//   function inner() {
//     console.log("inner:", username);
//   }

//   function innerTwo() {
//     console.log("innerTwo:", username);
//   }

//   inner();
//   innerTwo();

// }
// outer();

// 32: es5 vs es6 : https://www.youtube.com/watch?v=Iek4DtRobLA

// 33. asynchronous vs synchronous
//Synchronous : Synchronous means the code run in a particular  sequence of
// instructions given in the program.Each instruction waits for
// the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");
// console.log("fourd");
// console.log("five");
// console.log("six");

//Asynchronous : due to synchronous programming,sometimes important instruction
// get blocked to some previous instructions,which cause a delay in the UI.
//Asynchronous code executions allow to execute next instructions immediately
// and does not block the flow.
// console.log("")
// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(()=>{
//   console.log("Async Operation");
// },3000);

// console.log("four");
// console.log("five");
// console.log("six");

// 34. what is callback in js: https://www.youtube.com/watch?v=z-H8S83jJec
//Callback : Callback is a function passed as an argument into another function.
//method 1
// const calculator = (a,b,operation) =>{
//   return operation(a , b);
// }

// function addition(a,b){
//   return(a + b);
// }

// console.log(calculator(4,5,addition));

//method 2
// const subtruction = calculator(8,3,function(num1,num2){
// return (num1 - num2);
// })

// console.log(subtruction);

//method 3
// const multiplication = (a,b) => a * b;

// const mulResult = calculator(5,2,multiplication);

// console.log(mulResult);



  

// 35. async await: https://www.youtube.com/watch?v=spvYqO_Kp9Q
//async-await : An async function always return a promise.Await pauses the execution
//  of its surrounding async function until the promise is sattled(resoleve or reject).

// function getData(data){
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data",data);
//     resolve("success");
//   },3000);
//   }
// )};

// async function getAllData() {
//   console.log("Fetching data1..")
//   await getData(1);

//   console.log("Fetching data2..")
//   await getData(2);

//   console.log("Fetching data3..")
//   await getData(3);

//   console.log("Fetching data4..")
//   await getData(4);

//   console.log("Fetching data5..")
//   await getData(5);

//   console.log("Fetching data6..")
//   await getData(6);
// }

// 36. What is JSON
//JSON : JavaScript Object Notation  is lightweight text-based format for storing
//  and transporting data.Commonly used for API and config files.
//JSON Syntax
// const data = {
//   "name": "Alice",
//   "coursename": "JS",
//   "age": 25,
//   "price": "free",
//   "isStudent": true,
//   "skills": ["Javascript", "HTML", "CSS"],
//   "address": {
//     "city": "Agartala"
//   }
// }
// 37. simple calculator using html js css: https://www.youtube.com/watch?v=TXCj39dGLlY

