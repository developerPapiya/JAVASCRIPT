//  SetInterval

// 1. What is the purpose of setInterval in JavaScript?
/*In JavaScript, the setInterval function is used to repeatedly execute a specified
 function or piece of code at a fixed time interval, measured in milliseconds.It 
 continues to call the function until it is explicitly stopped using clearInterval.
 Purpose of SetInterval to * updaitng User Interface, *Polling Server, *Animation Effects.*/
 
//  const intervalId = setInterval(()=>{
//     console.log("This message will appears every 1 second");
//  },1000);

//  setTimeout(()=>{
//   clearInterval (intervalId);
//   console.log("Interval Stopped");
//  },6000);



// 2. Can you write an example of using setInterval?

let  countdownTimer = 10;

const intervalId = setInterval(()=>{
    console.log(`Time left : ${countdownTimer} seconds`);

    countdownTimer--;

    if(countdownTimer <= 0){
        clearInterval(intervalId);
        console.log("coundown time finished");
    }
},1000);



// 3. How does setInterval work with repetitive tasks?
/*How setInterval Works:
Schedule a Function: When you call setInterval, it schedules the specified function to be executed repeatedly,
 starting after the specified time delay.

Fixed Interval: The function will run at fixed intervals as long as the script continues to run and the interval is not cleared.

Repetition: setInterval keeps running indefinitely until explicitly stopped using clearInterval.

Delay Between Calls: The delay is the time between the end of one function execution and the start of the next.
However, if the function's execution time exceeds the interval, the subsequent execution will be queued by the JavaScript event loop.*/

//Example of SetInterval with repetative Task

// let count = 1;

// const intervalId = setInterval(()=>{
//     console.log(`Task executed ${count} times.`);

//     count++;
      
//     if(count ===5){
//         clearInterval(intervalId);
//         console.log("Repetative task finished");
//     }
// },1000)


// 4. What is the difference between setInterval and setTimeout?
//SetInterval:
/* *Purpose:Executes a function repeatedly at a fixed time interval.
*Repetition:Use setInterval for repetitive tasks.
*Stopping Execution:setInterval requires clearInterval to stop the repetition.
* When to Use:Ideal for tasks that need repetition, like polling data or updating a clock, or performing recurring animations.*/
// let count = 1;

// const intervalId = setInterval(()=>{
//     console.log(` Count: ${count} `);

//     count++;
      
//     if(count ===5){
//         clearInterval(intervalId);
//         console.log("Interval Stopped");
//     }
// },1000)

/**Purpose:Executes a function once after a specified delay.
 * Repetition:Use setTimeout for one-time delayed actions.
 * Stopping Execution:setTimeout requires clearTimeout to cancel the scheduled execution.
 * When to Use: Showing a message after a delay, scheduling a delayed function call, or creating a timeout.*/

// setTimeout(() => {
//     console.log("This message appears after 4 seconds.");
// }, 4000);



// 5. Can you explain the concept of polling using setInterval?
/*Polling with SetInterval:
*A function is defined to check for updates or changes, such as fetching data from a server or verifying a condition.
*setInterval is used to repeatedly execute this function at specified intervals (every 2 seconds).
*The program continues to poll until the condition is met or until the polling is explicitly stopped using clearInterval.*/
//  let pollingCount = 0;

//  const interval = setInterval(()=>{
//     console.log("Polling the server");

//     const response = Math.random() > 0.5 ;

//     pollingCount++;

//     if (response){
//         console.log("Updtae recieved from the server.");
//         clearInterval(interval);
//     }else if(pollingCount >=10){
//         console.log("Maximum Polling attempt reached.Stopped polling");
//         clearInterval(interval);
//     }
//  },2000);



// 6. How does setInterval work with animations?
//Example
// let position = 0;
// const box = document.getElementById("box");

// const interval = setInterval(()=>{
//      position += 5;
//      box.style.left = `${position}px` ;

//      if (position >= 300){
//         clearInterval(interval);
//         console.log("Animation completed");
//      }
// },50);





// 7. Can you write an example of using setInterval with a callback?

// function  greet(name){
//     console.log(`Hello,${name}!`);
// }

// const interval = setInterval(()=>{
//     greet("Alice");
// },1000);

// setTimeout(()=>{
//     clearInterval(interval);
//     console.log("Stopped the repeted greeting.");
// },6000);




// 8. How does setInterval handle multiple intervals?
// const interval1 = setInterval(()=>{
//     console.log("Interval 1 runs every 1 second.");
// },1000);

// const interval2 = setInterval(()=>{
//     console.log("Interval 2 runs every 2 seconds.");
// },2000);

// const interval3 = setInterval(()=>{
//     console.log("Interval 3 runs every 3 seconds.");
// },3000);

// setTimeout(()=>{
//     clearInterval(interval1);
//     clearInterval(interval2);
//     clearInterval(interval3);
//     console.log("All intervals have been stopped");
// },10000);


// 9. Can you explain the benefits of using setInterval?
/*1. Automates Repetitive Tasks
setInterval allows you to automatically perform a task at regular intervals
without needing to manually call a function multiple times.Such as:
*Polling a server for updates (e.g., checking for new messages).
*Updating UI elements periodically (e.g., updating a clock or progress bar).
*Running background tasks like animation updates or background computations.

2. Simplifies Timing Management
Instead of writing complex code to manage time delays, setInterval provides
a straightforward approach to handle repetitive actions.

3. Reduces Manual Work
Using setInterval, you can reduce the amount of manual intervention needed for tasks. 
Once set up, the interval function runs automatically at the specified time, allowing
the program to handle repetitive processes without additional coding or effort.

4. Periodic Data Updates
5. Useful for Animations
6. Easy to Implement*/

// let position = 0;
// const box = document.getElementById("box");

// const intervalId = setInterval(() => {
//     position += 5;
//     box.style.left = position + "px";

//     if (position >= 300) {
//         clearInterval(intervalId);
//         console.log("Animation completed.");
//     }
// }, 50); 


// 10. How does setInterval work with the event loop?

//Example :Event Loop and SetInterval
// console.log("Start of program");

// setInterval(()=>{
//     console.log("This will runs every 2 seconds ");
// },2000);

// console.log("End of program");





