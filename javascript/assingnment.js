// Q1. Write a function to reverse a given string.

// function reverseString (str){

//     let output = '';
//     for (let i = str.length-1; i >=0;  i--){
//         output += str[i];
//     }
//    return output;
// }

// const reversedStr = reverseString("Hello World!");
// console.log(reversedStr);

// ----------------
// let output = '';
// console.log(output);
// function reverseString (str){

//     for (let i = str.length-1; i >=0;  i--){
//         output += str[i];
//     }
// }
// reverseString("hello");
// console.log(output)

//Q2. write a function to convert a string to uppercase.

// function convertString(str){
//   return  str.toUpperCase();
// }
// const finalResult=convertString("javascripts");
// console.log(finalResult);

// Q3. write a function to convert a string toLowerCase.

// function convertString(str) {
//   return str.toLowerCase();
// }
// const finalResult = convertString("HELLO WORLD");
// console.log(finalResult);

/* Q4. write a function to check if a string contains
 a specific substring.*/

//  const string = "Hello World";
//  const subString =  "none";
//  console.log(string,subString);

//  function containString (str,substring){
//     return str.includes(substring);
//  }

// const Result = containString(string,subString);
// console.log(Result);

/* Q5. write a function to replace all occurrences of a
 substring with a new string*/

// let str = "Hello Papiya,how are you?";
// let subStr = "Papiya";
// let replaceWord = "Papai";

// console.log(str);

// let result = str.replaceAll(subStr, replaceWord);

// console.log(result);

// Q6. Write a function to extract the first word from a string.

// function originalStr(str){
//     let output=str.split(' ');

//     return output[0];
// }
// const firstWord = originalStr("Hello World");
// console.log(firstWord);

// Q7. Write a function to extract the last word from a string.

// function originalStr(str){
//     let output=str.split(' ');

//     return output[output.length-1];
// }
// const lastWord = originalStr("Hello World");
// console.log(lastWord);

// Q8. Write a function to remove all whitespace from a string.

// function  removeWhitespace(str){
//   return str.replace(/\s+/g, '');
// }
// const result = removeWhitespace("Let' s learn javascript");
// console.log(result);

// Q9. Write a function to count the number of vowels in a string.

// function countNumber(str) {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i] === "a" ||
//       str[i] === "e" ||
//       str[i] === "i" ||
//       str[i] === "o" ||
//       str[i] === "u" ||
//       str[i] === "A" ||
//       str[i] === "E" ||
//       str[i] === "I" ||
//       str[i] === "O" ||
//       str[i] === "U") {
//       console.log(str[i]);
//       count++;
//     }
//   }
//   return count;
// }
// const result = countNumber("javascript");
// console.log(`The number of vowels: ${result}`);

//Q10. Write a function to check if a string is a palindrome.

// function checkPalindrome(str){
//   return str == str.split('').reverse().join('');
// }

// const finalString1= checkPalindrome("madam");
// console.log(finalString1);

// const finalString2= checkPalindrome("hello");
// console.log(finalString2);

// ----Array Oparetions----

// Q1. Write a function to reverse an array.

// function reverseArray(arr){
//   return arr.reverse();
// }
// const value = [1,2,3,4,5];
// const reversedArray = reverseArray(value);
// console.log(reversedArray);

// Q2. Write a function to flatten a nested array.

// function flattenArray (arr){
// return arr.flat(Infinity);
// };
// const nestedArray=[1, [2, [3, 4], 5], 6];
// const finalArray= flattenArray(nestedArray);
// console.log(finalArray);

// Q3. Write a function to remove duplicates from an array.

// function removeDuplicates (arr){
//   return  [ ...new Set(arr)];

// }
// const value = [1,2,3,4,5,5,6,7,3];
// const finalArray = removeDuplicates(value);
// console.log(finalArray);

// Q4. Write a function to find the index of a specific element in an array.

// function specificElement (arr,element){
// return arr.indexOf(element);

// }
// const array =[100,200,300,400,500];
// const specificIndex = specificElement(array,400);
// console.log(specificIndex);

// Q5. Write a function to extract all even numbers from an array.

// function extractEvenNumbers(arr){

//   let evenValue=[];
//   for(let i = 0; i < arr.length;i++){
//     if (arr[i] % 2 ===0){
//       evenValue.push(arr[i]);
//     }
//   }
//   return evenValue;
// }
// const number = [11,25,44,32,55,70,92,100];
// const evenNumber= extractEvenNumbers(number);
// console.log(evenNumber);

// Q6. Write a function to extract all odd numbers from an array.

// function extractEvenNumbers(arr){

//   let evenValue=[];
//   for(let i = 0; i < arr.length;i++){
//     if (arr[i] % 2 !=0){
//       evenValue.push(arr[i]);
//     }
//   }
//   return evenValue;
// }
// const number = [11,25,44,32,55,70,49,92,99,100];
// const evenNumber= extractEvenNumbers(number);
// console.log(evenNumber);

// Q7. Write a function to find the maximum value in an array.

// function maximumValue(arr){
//   let max = arr[0];

//   for(let i = 1;i < arr.length;i++){
//     if (arr[i] > max){
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const value=[1,2,3,4,5,6,7,8,9,0];
// const maxValue= maximumValue(value);
// console.log(maxValue);

// Q8. Write a function to find the minimum value in  an array.

// function maximumValue(arr){
//   let min = arr[0];

//   for(let i = 1;i < arr.length;i++){
//     if (arr[i] < min){
//       min = arr[i];
//     }
//   }
//   return min;
// }
// const value=[40,20,80,10,60,90,100];
// const minValue= maximumValue(value);
// console.log(minValue)

// Q9. Write a function to sum all numbers in an array.

// function sumAllNumbers(arr){

//   let sum =0;

//   for(let i = 0; i < arr.length; i++){

//      sum = sum + arr[i];
//   }

//   return sum;
// }
// const numbers = [1,2,3,4,5,6,7,8,9];
// const result= sumAllNumbers(numbers);
// console.log(result);



// Q10.Write a function to find the average of all numbers in an array.

function averageNum(marks) {
  let sum = 0;
  for (let val of marks) {
    sum += val;
  }

  let avg = sum / marks.length;

  return avg;
}
const values = [20, 40, 60, 50, 30, 80, 90];
const avgNumber = averageNum(values);
console.log("The average of all numbers is :",avgNumber);
