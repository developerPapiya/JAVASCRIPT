
// <----API---->
// Using Fetch API

// const URL ="https://cat-fact.herokuapp.com/facts"
// const factPara=document.querySelector("#fact");

//  const getFacts = async() => {     //using async-await
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);  //JSON format
//    let data = await response.json();
//    console.log(data[1].text);
//    factPara.innerText = data[1].text;


// <-- Fetch API using promise Chain-->

// const URL ="https://cat-fact.herokuapp.com/facts"
// const factPara=document.querySelector("#fact");

// function getFacts() {
//  fetch(URL).then((response) =>{
//   return response.json();
//  })
//  .then((data)=>{
//   console.log(data[1].text);
//   factPara.innerText = data[1].text;
//  })
// }
