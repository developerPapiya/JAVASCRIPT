// SetImmediate

// 1. What is the purpose of setImmediate in JavaScript?
/* *Non-blocking: It ensures the function runs asynchronously after the current script execution completes.
*Faster Execution than setTimeout: Functions scheduled with setImmediate are executed before timers with a setTimeout delay of 0 milliseconds.
*Availability: It is a feature provided in Node.js (not in browsers) as part of the timers module.
Use Case*/

console.log("Start of program");

setImmediate(()=>{
   console.log("Executed in SetImmediate");
});

console.log("End of program");

// 2. Can you write an example of using setImmediate?

console.log("Before SetImmediate");

setImmediate(()=>{
   console.log("Executed in SetImmediate");
});

console.log("After SetImmediate");



// 3. How does setImmediate work with asynchronous operations?

// const fs = require('fs');

// console.log("Start");

// fs.readFile(__filename,()=>{
//     console.log("I/O operation completed");

//     setImmediate(()=>{
//         console.log("SetImmediate inside I/O");
//     });

//     setTimeout(()=>{
//         console.log("SetTimeOut inside I/O");
//     },0);
// });

// setImmediate(()=>{
//     console.log("SetImmediate outside I/O");
// });

// setTimeout(() => {
//     console.log("SetTimeOut outside I/O");
// },0);

// console.log("end");




// 4. What is the difference between setImmediate and setTimeout?
/* SetImmediate:
*Execution Time:Executes the callback after the current event loop phase, in the "check" phase.
*Runs callbacks before timers (setTimeout) when both are queued simultaneously.
*Designed for scheduling callbacks to run as soon as possible after I/O operations or other asynchronous tasks.
*No delay can be specified. Executes as soon as the current phase ends.*/

/* SetTimeOut:
*Executes the callback after a specified delay
*Runs callbacks in the timer phase, after the delay has elapsed.
*Used for scheduling tasks to run after a specified delay.
*Allows you to specify a delay in milliseconds.*/


// console.log("Start");

// // Using setImmediate
// setImmediate(() => {
//   console.log("setImmediate callback");
// });

// // Using setTimeout 
// setTimeout(() => {
//   console.log("setTimeout callback");
// }, 0);

// console.log("End");



// 5. Can you explain the concept of deferring a function using setImmediate?

/* *Non-blocking: setImmediate ensures that the function runs asynchronously, meaning it doesn’t block the current execution flow.
*Prioritization: It executes the deferred function before setTimeout (with 0ms delay) and after I/O operations in the "check" phase of the event loop.
*Efficient Resource Usage: It's ideal for scheduling tasks that don't need to be executed immediately but should run as soon as the event loop allows.*/
 
// console.log("Start");

// // Deferring a function with setImmediate
// setImmediate(() => {
//   console.log("Deferred function executed using setImmediate");
// });

// console.log("End");






// 6. How does setImmediate work with the event loop?
// const fs = require('fs');

// console.log("Start");

// setTimeout(() => {
//   console.log("setTimeout callback");
// }, 0);

// setImmediate(() => {
//   console.log("setImmediate callback");
// });

// fs.readFile(__filename, () => {
//   console.log("I/O operation completed");

//   setImmediate(() => {
//     console.log("setImmediate inside I/O");
//   });

//   setTimeout(() => {
//     console.log("setTimeout inside I/O");
//   }, 0);
// });
// console.log("End");



// 7. Can you write an example of using setImmediate with a callback?

// console.log("Start");

// function myCallback() {
//   console.log("Callback executed using setImmediate");
// }

// setImmediate(myCallback);

// console.log("End");


// 8. How does setImmediate handle multiple immediates?
/* *FIFO (First In, First Out) Order: Callbacks scheduled using setImmediate are executed in the order they are added to the queue.
If multiple setImmediate calls are made, their callbacks are queued and executed one by one during the check phase.

*Non-blocking: The execution of setImmediate callbacks does not block the event loop. Each callback is executed independently after the current phase completes.*/

// console.log("Start");

// setImmediate(() => {
//   console.log("Immediate 1");
// });

// setImmediate(() => {
//   console.log("Immediate 2");
// });

// setImmediate(() => {
//   console.log("Immediate 3");
// });

// console.log("End");



// 9. Can you explain the benefits of using setImmediate?
// 1. Non-Blocking Behavior
// console.log("Before SetImmediate");

// setImmediate(()=>{
//    console.log("Executed in SetImmediate");
// });

// console.log("After SetImmediate");
// // 2. Prioritization After I/O
// const fs = require('fs');
// fs.readFile(__filename, () => {
//   console.log("I/O operation completed");
//   setImmediate(() => console.log("Executed setImmediate after I/O"));
// });
// // 3. Predictable Execution Order
// setImmediate(() => console.log("Immediate 1"));
// setImmediate(() => console.log("Immediate 2"));
// // 4. Avoids Arbitrary Timing Delays
// // Breaking Long-Running Tasks
// function breakingTask() {
//     for (let i = 0; i < 1; i++) {}
//     console.log("Task completed");
//   }
//   console.log("Start");
  
//   setImmediate(() => breakingTask());
//   setImmediate(() => console.log("Another task deferred"));
  
//   console.log("End");
  
// 10. How does setImmediate work with Node.js?

// // //SetTimeOut with Synchronous
// console.log("Start");

// setImmediate(() => {
//   console.log("setImmediate callback");
// });

// console.log("End");

// // //setImmediate with I/O
// const fs = require('fs');

// console.log("Start");

// fs.readFile(__filename, () => {
//   console.log("I/O operation completed");

//   setImmediate(() => {
//     console.log("setImmediate callback inside I/O");
//   });

//   setTimeout(() => {
//     console.log("setTimeout callback inside I/O");
//   }, 0);
// });

// console.log("End");
