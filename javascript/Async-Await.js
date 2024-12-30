//------ Async/Await------

// 1. What is the purpose of async/await in JavaScript?
/*The Async/Await in javascript simplifies working with asynchronus code,
make it easier to write and read.it allows developers to work with  promises,
improving code clarity and reducing complexity.
Purpose of Async/Await
*simplify Asynchronous code
*Improve Readabilty
*Error Handling
*Avoid Callback Hell*/

// function fetchData(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("Data Fetched");
//            resolve("Data has been succeccfully fetched");
//         }, 3000);
//     })
// }
// async function fetchDataAll() {
//   try{
//    const result = await fetchData();
//    console.log(result);
// }catch(error){
//     console.error(error);
// }

// }
// fetchDataAll();

// 2. How does async/await improve code readability?
/*Async/Await imporve code readability in javascript by making
 *Sequential Flow
 *Avoiding Callback Hell
 *Cleaner Error Handling
 *Improve Debugging*/

// function fetchData(url){
//     return new Promise((resole,reject)=>{
//         setTimeout(() => {
//             console.log(`Data URL: ${url}`);
//             resole("Data has been succeccfully fetched");
//         }, 2000);
//     })
// }
//  async function fetchDataSequentialyWithErrorHandling(){
//     try{
//         const data1 = await fetchData("https://github.com/alexwohlbruck/cat-facts.git");
//         console.log(data1);

//         const data2 = await fetchData("https://dogapi.dog/api/v2");
//         console.log(data2);
//     }catch(error){
//         console.error("Error Occurred:",error);
//     }
//  }
//  fetchDataSequentialyWithErrorHandling();

// 3. Can you write an example of an async function?
//  async function getData() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Data fetched!");
//         }, 4000);
//     })
//  }
//  async function getDataAll() {
//     console.log("Fetching data1...");
//     const data = await getData();
//     console.log(data);
//     console.log("Fetching data2...");
//     const data1 = await getData();
//     console.log(data1);

//  }
//  getDataAll();

// 4. What is the difference between async and await?

/*Async:
*The async keyword used to declare a function as asynchronous.
*Async keyword use before a function defination.
*An async function always return a promise.
*Async does not pause execution by itself.
*Async allowing the use of Await within it.

Await:
*The awai keyword only be used inside an Async function.
*It pause the execution until the promise resolves or reject.
*It waits for prmise to resolve and retrives its result.
*It makes asynchromous code look more like synchronous code.*/

// 5. How do you handle errors in async/await?

// async function fetchData(url) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Fetching data from", url);
//       reject("Error occurred while fecthing data");
//     }, 2000);
//   });
// }
// async function main() {

//   try {
//     const data = await fetchData(
//       "https://github.com/alexwohlbruck/cat-facts.git"
//     );
//     console.log("Data recieved:", data);

//   } catch (error) {
//     console.log("Error occurred:", error);

//   } finally {
//     console.log("This will always run");
//   }
// }
// main();

// 6. Can you explain the concept of asynchronous programming?
/* Asynchronous programming is a paradigm that allows a program to perform task without blocking the execution of other task.
This is particularly useful for operations that take time such as fetching dat from a server, reading a file,network request or database queries.*/

// 7. How does async/await work with promises?
/*Async/await  function work with promise: When  a function is decleared with the async keyword
it automatically returns a promise,regardless oof whether user explicitly return one.
 The await keyword pause the execution of an async function until the is resolves.
 If the promise resolve ,await returns the resolve value.If the promise reject,
 await throw the rejection as an exception.*/

// promise resolve
// async function fetchData() {
//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() => resolve("Data fetched successfully!"), 2000);
//     });

//     const result = await promise;
//     console.log(result);
// }

// fetchData();

// promise reject
// async function fetchData1() {
//   const promise = new Promise(( resolve,reject) => {
//       setTimeout(() => reject(("Fetch failed!")), 3000);
//   });

//   try {
//       const result = await promise;
//       console.log(result);
//   } catch (error) {
//       console.error("Error:", error);
//   }
// }

// fetchData1();

// async function processSteps() {
//   const step1 = await new Promise(resolve => resolve("Step 1 complete"));
//   console.log(step1);

//   const step2 = await new Promise(resolve => resolve("Step 2 complete"));
//   console.log(step2);

//   const step3 = await new Promise(resolve => resolve("Step 3 complete"));
//   console.log(step3);
// }

// processSteps();

// 8. Can you write an example of awaiting a promise?
// async function exampleOfAwait() {
//   const promise1 = new Promise((resolve)=>{
//     setTimeout(() => {
//       resolve("Promise resolved!");
//     }, 3000);
//   })
//   console.log("BEfore awaiting the promise..");

//   const output = await promise1;
//   console.log(output);

//   console.log("After awaiting the promise");

// }
// exampleOfAwait();

// 9. How do you chain multiple async functions?

// async function data1() {
//   return new Promise((resolve) => setTimeout(() => resolve("Data  1 fetched!"), 2000));
// }

// async function data2() {
//   return new Promise((resolve) => setTimeout(() => resolve("Data  2 fetched!"), 2000));
// }

// async function data3() {
//   return new Promise((resolve) => setTimeout(() => resolve("Data  3 fetched!"), 2000));
// }

// async function chainMultipleFunc() {
//   console.log("Fetching data 1..")
//   console.log(await data1());
//   console.log("Fetching data 2..")
//   console.log(await data2());
//   console.log("Fetching data 3..")
//   console.log(await data3());
// }

// chainMultipleFunc();

// 10. Can you explain the benefits of using async/await over callbacks?
/*Benefits of using async/await over callbacks:
*Improve readability:
With Callbacks, Asynchronous code using nested callbacks can quickly become complex and 
difficult to read, often referred to as callback hell.

With async/await,The code becomes linear and easier to follow, resembling synchronous code.*/
// async function fetchData() {
//   return "Data fetched";
// }
// async function processData(data) {
//   return `processed ${data}`;
// }
// async function finalData(processedData) {
//   return `finaldata ${processedData}`;
// }
// async function getAllData() {
//   try {
//     const data = await fetchData();
//     const processedData = await processData(data);
//     const result = await finalData(processedData);
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   }
// }
// getAllData();

/*Easier Error Handling:
With Callbacks, user must manually handle errors in every callback, leading to repetitive
 code and potential missed errors.

 With async/await: Use try/catch blocks to handle errors in one place, making 
 the code cleaner and more consistent.*/
// async function fetchData() {
//   return "Data fetched";
// }
// async function processData(data) {
//   throw new Error("Processing Failed");
// }
// async function finalData(processedData) {
//   return `finaldata ${processedData}`;
// }
// async function getAllData() {
//   try {
//     const data = await fetchData();
//     console.log("fetched Data:", data);
//     const processedData = await processData(data);
//     console.log("Processed data:", processedData);
//     const result = await finalData(processedData);
//     console.log("Final Data:", result);
//     console.log(result);
//   } catch (error) {
//     console.error("Error Occurred:", error.message);
//   }
// }
// getAllData();
/*Avoiding "Callback Hell":
 Nested callbacks increase code complexity, making it difficult to follow 
 logic and maintain.
 async/await flattens asynchronous code, removing deep nesting.*/
 // Callback Hell
// firstTask((err, result1) => {
//     if (err) return handleError(err);
//     secondTask(result1, (err, result2) => {
//         if (err) return handleError(err);
//         thirdTask(result2, (err, result3) => {
//             if (err) return handleError(err);
//             console.log(result3);
//         });
//     });
// });

// // With async/await
// async function runTasks() {
//     try {
//         const result1 = await firstTask();
//         const result2 = await secondTask(result1);
//         const result3 = await thirdTask(result2);
//         console.log(result3);
//     } catch (err) {
//         handleError(err);
//     }
// }


/*Simplified Debugging:
With Callbacks, Debugging is challenging due to nested scopes and 
lack of stack trace clarity.
With async/await, Errors are thrown like in synchronous code, 
making stack traces easier to understand.*/




// SetTimeout

// 1. What is the purpose of setTimeout in JavaScript?
// 2. Can you write an example of using setTimeout?
// 3. How does setTimeout work with asynchronous operations?
// 4. What is the difference between setTimeout and setInterval?
// 5. Can you explain the concept of debouncing using setTimeout?
// 6. How does setTimeout work with recursive functions?
// 7. Can you write an example of using setTimeout with a callback?
// 8. How does setTimeout handle multiple timeouts?
// 9. Can you explain the benefits of using setTimeout?
// 10. How does setTimeout work with the event loop?

// SetInterval

// 1. What is the purpose of setInterval in JavaScript?
// 2. Can you write an example of using setInterval?
// 3. How does setInterval work with repetitive tasks?
// 4. What is the difference between setInterval and setTimeout?
// 5. Can you explain the concept of polling using setInterval?
// 6. How does setInterval work with animations?
// 7. Can you write an example of using setInterval with a callback?
// 8. How does setInterval handle multiple intervals?
// 9. Can you explain the benefits of using setInterval?
// 10. How does setInterval work with the event loop?

// SetImmediate

// 1. What is the purpose of setImmediate in JavaScript?
// 2. Can you write an example of using setImmediate?
// 3. How does setImmediate work with asynchronous operations?
// 4. What is the difference between setImmediate and setTimeout?
// 5. Can you explain the concept of deferring a function using setImmediate?
// 6. How does setImmediate work with the event loop?
// 7. Can you write an example of using setImmediate with a callback?
// 8. How does setImmediate handle multiple immediates?
// 9. Can you explain the benefits of using setImmediate?
// 10. How does setImmediate work with Node.js?
