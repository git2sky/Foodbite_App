// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Congratulations!!! Your Promise has been resolved");
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Congratulations!!! Your Promise has been resolved");
//     }, 5000);
// });

// async function handlePromise() {
//   console.log("Hello");
//   //VIP Treatment-- Here JS Engine will pause execution and will wait for Promise to be resolved.
//   let promiseVal = await p1;
//   console.log(promiseVal);

//   //Bothe the promises will reolve simultaneously
//   let promiseVal2 = await p2;
//   console.log(promiseVal2);
// }

// handlePromise();

// function getData() {
// //No VIP Treatment-- Here JS Engine will not pause execution and will not wait for Promise to be resolved.
//   let promiseVal = p.then((res) => console.log(promiseVal));
//   console.log(
//     "This line will be printed first and JS engine will not wait for promise to be resolved"
//   );
// }

// getData();

let URL_API = "github_Url";

async function fetchData() {
  try {
    let responseData = await fetch(URL_API);
    let jsonDataResponse = await responseData.json();
    console.log(jsonDataResponse);
  } catch (err) {
    console.log(err);
  }
}
fetchData().catch(err => console.log(err));
