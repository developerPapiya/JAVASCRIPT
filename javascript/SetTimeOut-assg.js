//  SetTimeout

// 1. What is the purpose of setTimeout in JavaScript?
/* SetTimeOut:
The setTimeout function in JavaScript is used to execute a piece of code or call
 a function after a specified delay, measured in milliseconds. It is commonly used 
 for creating delays or scheduling tasks to be executed later.
*Key Points:
Asynchronous Execution: setTimeout does not block the execution of the rest of the code. 
It schedules the function to run after the specified time.
Single Execution: The function executes only once unless you call setTimeout repeatedly.*/
//Example
// setTimeout(() => {
//     console.log("HELLO WORLD!");
// }, 2000);

// //cancel
// let timeoutId = setTimeout(() => {
//     console.log("This will not run");
// }, 5000);

// clearTimeout(timeoutId); 


// 2. Can you write an example of using setTimeout?
// console.log("Start of program");

// setTimeout(() => {
//     console.log("Hello World, after 2 seconds!");
// }, 2000);

// console.log("End of program");


// Example: Timer with Multiple Arguments
// function displayMessage(name, time) {
//     console.log(`Hello, ${name}! This message was delayed by ${time} seconds.`);
// }

// setTimeout(displayMessage, 2000, "Alice", 2); // Pass arguments to the function


// 3. How does setTimeout work with asynchronous operations?
/*The setTimeout function works with asynchronous operations by scheduling tasks to run after 
a specified delay. However, it doesn't pause or block the execution of other code.*/

// console.log("Start of program");

// setTimeout(() => {
//     console.log("Hello World, after 2 seconds!");
//     setTimeout(()=>{
//       console.log("Data Fetched  after 3 seconds! ")
//     },3000);
// }, 2000);

// console.log("End of program");

// 4. What is the difference between setTimeout and setInterval?
/* *Execution Behavior
setTimeout: Executes the callback function once after a specified delay.
setInterval: Executes the callback function repeatedly at regular intervals
defined by the specified delay.

* Cancellation
setTimeout: Use clearTimeout(timeoutId) to cancel a scheduled execution.
setInterval: Use clearInterval(intervalId) to stop repeated executions.*/

// example SetTimeOut
// console.log("Start of program");

// setTimeout(() => {
//     console.log("Hello World, after 2 seconds!");
// }, 1000);

// let timeoutId = setTimeout(()=>{
//     console.log("Data Fetched  after 3 seconds! ")
//   },3000);
// clearTimeout(timeoutId);

// console.log("End of program");

// //example SetInterval
// console.log("Start");
// let count = 0;
// let intervalId = setInterval(() => {
//     count++;
//     console.log(`Interval count: ${count}`);
//     if (count === 5) {
//         clearInterval(intervalId); 
//         console.log("Interval cleared");
//     }
// }, 2000);
// console.log("End");



// 5. Can you explain the concept of debouncing using setTimeout?
/* Debouncing:
Debouncing is a programming concept used to control the frequency of execution of a
function.It ensures that a function is executed only once after a specified delay,
regardless of how many times it is triggered during that delay period.
 
*Debouncing Work:
Debouncing works by using a setTimeout to delay the function execution. If the event is 
triggered again within the delay period, the previous timer is canceled (clearTimeout),and a 
new one is started. This ensures that the function executes only after the triggering events stop.*/

//Search input
// let debounceTimer;

// function handleSearch(event) {
//     clearTimeout(debounceTimer);

//     debounceTimer = setTimeout(() => {
//         console.log("Searching for:", event.target.value);
//     }, 500);
// }

// document.getElementById("search-input").addEventListener("input", handleSearch);


// 6. How does setTimeout work with recursive functions?
/*When setTimeout is used in a recursive function:
*The function schedules itself to execute again after a specified delay using setTimeout.
*Each invocation of the function is handled asynchronously, so it does not block other 
code execution.*/

//example
//  console.log("start of recursion")
// function recursiveCount(number) {
//     if (number > 0) {
//         console.log(number);
//         setTimeout(() => recursiveCount(number - 1), 1000); 
//     } else {
//         console.log("End of recursion");
//     }
// }

// recursiveCount(5);



// 7. Can you write an example of using setTimeout with a callback?
 
// function FetchData(callback){
//     console.log("Fetching data..");

//     setTimeout(()=>{
//         const data = {id:1, name:"Alice"};
//         callback(data);
//     },2000);
// }
// function getData(data){
//     console.log("Getting data:",data);
// }
// FetchData(getData);




// 8. How does setTimeout handle multiple timeouts?

// console.log("Start");

// setTimeout(() => {
//     console.log("Task 1 complete after 1 second");
// }, 1000);

// setTimeout(() => {
//     console.log("Task 1 complete after 2 second");
// }, 2000);

// setTimeout(() => {
//     console.log("Task 1 complete after 3 second");
// }, 3000);

// console.log("End");



// 9. Can you explain the benefits of using setTimeout?
/* Benefits of using SetTimeOut:
*Non- Blocking Behavior:setTimeout schedules tasks to run after a delay without
 blocking the execution of the rest of the program.*/

/*Simulating Asynchronous Behavior:It can mimic the behavior of real-world asynchronous
  tasks like network requests or database operations.*/

/*Control over Timing: SetTimeOut Allows precise scheduling of when a function should execute.*/

/*Avoiding Blocking Code: SetTimeOut Helps in breaking up long-running tasks to prevent blocking the main
thread and improve responsiveness.*/

/*Implement Debouncing:Prevents functions from being called too frequently by scheduling the execution after a quiet period.

/*Graceful Task Mnagement: User can cancel tasks using clearTimeout to prevent unnecessary or undesired executions.

/*Sequential Execution with Controlled Delay:It Helps  execute tasks in sequence with a defined time gap.*/


// console.log("Start of program")
//    function getData(callback){
//       setTimeout(()=>{
//          const data = {id:1,name:"Alice"};
//          callback(data);
//       },2000);
//      }
//      getData((data)=>{
//       console.log("Data recieved from:",data);
//      });
//    console.log("End of program");
 



// 10. How does setTimeout work with the event loop?
/*The setTimeout function in JavaScript schedules a callback to run after a 
specified delay. Its execution is closely tied to the Event Loop, which manages
 the execution of asynchronous tasks alongside synchronous code.*/

console.log("Start of program");

setTimeout(()=>{
  console.log("This will run after 1 second");
},1000);

Promise.resolve().then(()=>{
  console.log(" Promise callback");
});

console.log("End of program");


