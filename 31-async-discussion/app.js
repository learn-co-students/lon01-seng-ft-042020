// 1. js as a 'guest' in the browser
// charles petzold "CODE"

// console.log("starting the work!");

// setTimeout(function () {
//   console.log("hello, this is from the FIRST setTimeout");
// }, 1500);

// setTimeout(function () {
//   console.log("hello, this is from the SECOND setTimeout");
// }, 1500);

// console.log("this is after the setTimeout call");

// 2.promises

// const myPromise = new Promise(function (resolve, reject) {
//   const bool = true;

//   if (bool) {
//     resolve("this has been successful");
//   } else {
//     reject("this was a total failure");
//   }
// });

// const delayedPromise = new Promise(function (resolve, reject) {
//   // math.random

// promise example with setTimeout
//   setTimeout(function () {
//     const number = Math.floor(Math.random() * 10) + 1;
//     if (number % 2 === 0) {
//       resolve("resolved value - the number was even!");
//     } else {
//       reject("rejected value - the number was odd");
//     }
//   }, 500);
// });

// delayedPromise
//   .then(function () {
//     console.log("YES! it all worked - the promise resolved successfuly");
//   })
//   .catch(function () {
//     console.error("yikes, things are not great");
//   });

// 3. pretendFetch

// function pretendFetch(url) {
//   console.log("Fetching from " + url);
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       const number = Math.floor(Math.random() * 10) + 1;
//       if (number < 8) {
//         resolve('{"name":"dan","age":28}');
//       } else {
//         reject('{"error":"500 things have gone wrong"}');
//       }
//     }, 500);
//   });
// }

// pretendFetch("http://google.co.uk/teachers/dan")
//   .then(function (data) {
//     console.log(data);
//   })
//   .then(function (teacherJSON) {
//     console.log(JSON.parse(teacherJSON));
//   })
//   .catch(function (error) {
//     console.log(JSON.parse(error));
//   });

// 4. for loop!

// const clock = document.querySelector("h1");
// clock.addEventListener("click", function () {
//   console.log("tick tock");
// });

// console.log("hello, before the loop");
// // for (let i = 0; i < 10000; i++) {
// //   console.log("");
// // }
// setTimeout(function () {
//   console.log("hey, its done");
// }, 5000);
// console.log("hello, after the loop");

// 5.jamie's q

// setTimeout(() => {
//   console.log(" I WILL COME LAST");
// }, 1000);

// myPromise = new Promise(function (res, rej) {
//   res("donezo");
// });

// myPromise.then(function (data) {
//   console.log(data);
// });

// console.log("when does this happen?");

// here the execution of those promises is possible
// cause other js has done its job

// thing to google for, (start with the video about the event loop)
// CALL STACK
