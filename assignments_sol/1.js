// function wait1(t) {
//   return new Promise((resolve) => setTimeout(resolve, t * 1000));
// }

// function wait2(t) {
//   return new Promise((resolve) => setTimeout(resolve, t * 1000));
// }

// function wait3(t) {
//   return new Promise((resolve) => setTimeout(resolve, t * 1000));
// }

// function calculateTime(t1, t2, t3) {
//   const startTime = Date.now();

//   return wait1(t1)
//     .then(() => wait2(t2))
//     .then(() => wait3(t3))
//     .then(() => {
//       const endTime = Date.now();
//       return endTime - startTime;
//     });
// }

// calculateTime(1, 2, 3).then((timeTaken) => {
//   console.log(`Time taken: ${timeTaken} ms`);
// });

// 2 qus
/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

// function sleep(milliseconds) {
//   return new Promise((resolve, reject) => {
//     setTimeout((resolve) => {
//       resolve("resolved");
//     }, milliseconds);
//   });
// }

// sleep(10000).then((result) => console.log(result));

//3
const { isUtf8 } = require("buffer");
const fs = require("fs");
fs.readFile("1.txt", "utf-8", (err, data) => {
  let storedata = data.toString();
  storedata = storedata
    .split(" ")
    .filter((word) => word !== "")
    .join(" ");
  console.log(storedata);
});
