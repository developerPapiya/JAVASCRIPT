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
function squareArray(arr){
    let squareArr = arr.map((num) =>{
        return num*num;
    });
    return squareArr;
}
const num = [1,2,3,4,5,6];
const squaredNumber = squareArray(num);
console.log(squaredNumber);

