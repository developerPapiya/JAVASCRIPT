alert("show alert");
console.log("hello");
console.dir(window.document);
console.log(document.body);

document.body.childNodes[3].innerText="JavaScripts"

let heading = document.getElementById("heading"); //ById
console.log(heading);

let classVal = document.getElementsByClassName("myClass"); //Byclass
console.dir(classVal);
console.log(classVal);

let para = document.getElementsByTagName("p"); //ByTag
console.dir(para);
console.log(para);

let val = document.querySelector("h3"); //First Element
console.log(val);

let allValue = document.querySelectorAll("h3"); //All Element
console.log(allValue);


let div = document.querySelector("div");
console.dir(div);

//Questions 1
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + "Javascript";//concatenate 

