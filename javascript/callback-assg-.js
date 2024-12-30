// Callbacks

// 1. What is a callback function in JavaScript?
/*Callback Function:
In JavaScript, a callback function is a function that is passed into another function 
as an argument and is executed later, after some operation or task is completed.*/
// This is the callback function
// function userName(name) {
//   console.log(`Hello, ${name}`);
// }
// function getUserName(callback) {
//   const name = 'Alice';
//   callback(name);  // Here, the callback is invoked
// }

// getUserName(userName);

// 2. Can you write an example of a callback function?
//  function sayHello(name){
//    console.log(`Hello,${name}`);
//  }
//  function userName(callback){
//     callback("Satchi");
//  }
//  userName(sayHello);

// //
// function sum(a,b){
//     console.log(a+b);
// }
// function getResult(a,b,sum){
//     sum(a,b);
// }
// getResult(6,8,sum);

// 3. How do callbacks handle asynchronous operations?
/*In JavaScript, callbacks are often used to handle asynchronous operations.
 An asynchronous operation is one that doesn't complete immediately, 
 such as making a network request, reading a file, or waiting for user input. 
 JavaScript uses callbacks to ensure that the code doesn’t block other operations 
 while waiting for the asynchronous task to finish.*/
//  function fetchData(callback) {
//     console.log('Fetching data...');
//     setTimeout(function() {
//       const data = { username: 'Alice', age: 25 ,job:"engineer"};
//       callback(data);
//     }, 3000);
//   }
//   function finalData(data) {
//     console.log('Data received:', data);
//   }
//   fetchData(finalData);

//   console.log('Waiting for data...');

// 4. What is the purpose of a callback in a function?
/*Purpoe of callback:
*Handling Asynchronous operation
Callbacks are commonly used to handle asynchronous operations.
 Instead of blocking the execution of the program until the operation completes,
  the callback is executed once the task finishes. */
// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched");
//     callback();
//   }, 1000);
// }

// fetchData(() => {
//   console.log("Callback function executed!");
// });
/* * Customizing Behavior:
Callbacks allow the behavior of a function to be customized without changing the function 
itself. By passing different callback functions, you can reuse the same function but make
 it do different things depending on the context.*/
// function getNumber(num, callback) {
//     setTimeout(() => {
//         const result = num * 2;
//     callback(result);
//     }, 3000);

//   }
//   getNumber(5, (result) => {
//     console.log("Double the number:", result);
//   });

//   getNumber(5, (result) => {
//     console.log("Squared number:", result * result);
//   });




// 5. Can you explain the concept of a callback hell?
/*Concept of Callback Hell:Callback hell (Pyramid of Doom) refers to a situation in JavaScriptwhere many
 nested callbacks are used in an asynchronous function, creating complex and difficult-to-read code.
This can happen when one asynchronous operation depends on the completion of another, leading to deeply nested 
 callbacks inside one another.*/
// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumvalue) {
//   sumvalue(a, b);
// }
// calculator(1, 2, sum);

// function getData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }
// // callback-hell
// console.log("Fetching data 1..");
// getData(1, () => {
//   console.log("Fetching data 2..");
//   getData(2, () => {
//     console.log("Fetching data 3..");
//     getData(3, () => {
//       console.log("Fetching data 4..");
//       getData(4, () => {
//         console.log("Fetching data 5..");
//         getData(5);
//       });
//     });
//   });
// });

// 6. How do callbacks work with higher-order functions?

// function getElement(array, callback) {
//     const result = [];
//     for (let i = 0; i < array.length; i++) {
//       result.push(callback(array[i]));
//     }
//     return result;
//   }
  
//   function double(num) {
//     return num * 2;
//   }
  
//   function square(num) {
//     return num * num;
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
  
//   const doubledNumbers = getElement(numbers, double);
//   const squaredNumbers = getElement(numbers, square);
  
//   console.log("Original numbers:", numbers);
//   console.log("Doubled numbers:", doubledNumbers);
//   console.log("Squared numbers:", squaredNumbers);
  
// 7. Can you write an example of a callback with multiple arguments?

// function calculate(a, b, callback) {
//     const sum = a + b;
//     const product = a * b;
//     callback(sum, product);  
//   }
  
//   // Callback function that handles multiple arguments
//   function displayResults(sum, product) {
//     console.log('Sum:', sum);         
//     console.log('Product:', product); 
//   }
  
//   calculate(5, 10, displayResults);
  

// 8. How do callbacks handle errors?
function fetchData(url, callback) {
  setTimeout(() => {
    if (!url) {
      
      callback("Error: URL is required");

    } else {
    
      callback(null, ( `Fetched data from : ${url}`));

    }
  }, 1000);
}

fetchData("https://github.com/alexwohlbruck/cat-facts.git", function(error, result) {
  if (error) {
    console.error("Failed to fetch data:", error);
    return;
  }
  console.log("Data fetched successfully:", result);
});




















// 9. Can you explain the difference between a callback and a promise?

//Difference in syntax & error handling

/*callback Hell: A callback is a function passed as an argument to another function,
 which is then invoked once an operation is completed. It is a way of ensuring that
 some code doesn't run until a certain task is finished, typically after an asynchronous operation.*/
// function fetchData(callback) {
//     setTimeout(() => {
//       const data = "Data Fetched" ;
//       callback(null,data);
//     }, 1000);
//   }
//   fetchData((error, data) => {
//     if (error) {
//       console.error("Error:", error);
//     } else {
//       console.log("Success:", data);
//     }
//   });

  /*Promise: A promise is an object that represents the eventual completion or failure
   of an asynchronous operation. A promise can be in one of three states: pending,
  fulfilled, or rejected.*/
  // function fetchData1() {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const data = "Fetched Data";
  //      reject("error occurred"); 
  //     }, 3000);
  //   });
  // }
  // fetchData1()
  //   .then(data => {
  //     console.log("Success:", data);
  //   })
  //   .catch(error => {
  //     console.error("Error:", error); 
  //   });

    

// 10. How do callbacks work with array methods?
/*In JavaScript, callbacks are commonly used with array methods to process or 
transform elements in an array. Several array methods, such as forEach, map, filter,
 and reduce, are higher-order functions that take a callback function as an argument.*/

//  // Callback With forEach Methode
//  //array.forEach(callback(currentValue, index, array));
//  const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number, index) {
//   console.log(`Index ${index}: ${number}`);
// });

// //Callback With map Method
// //const newArray = array.map(callback(currentValue, index, array));
// const numbers1 = [1, 2, 3, 4, 5];

// const doubledNumbers = numbers.map(function(number) {
//   return number * 2;
// });

// console.log(doubledNumbers); 

// //Callback with filter Method
// //const newArray = array.filter(callback(currentValue, index, array));
// const numbers2 = [1, 2, 3, 4, 5];

// const evenNumbers = numbers.filter(function(number) {
//   return number % 2 === 0;
// });
// console.log(evenNumbers);  

// // Callback with reduce Method
// //const result = array.reduce(callback(accumulator, currentValue, index, array), initialValue);
// const numbers3 = [1, 2, 3, 4, 5];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//   return accumulator + currentValue;
// }, 0);
// console.log(sum);  
