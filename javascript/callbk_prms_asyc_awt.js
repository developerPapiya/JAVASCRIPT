
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
// }