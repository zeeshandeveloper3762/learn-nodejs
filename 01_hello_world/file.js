const fs = require("fs");

// Sync result return karta he
fs.writeFileSync("./test.txt", "Hey There");
// example
// const result = fs.readFileSync("./example.txt", "utf-8");
// console.log(result);

// Async result return nhe karta, callback leta he
// fs.writeFile("./test2.txt", "Hey there Async", (error) => {
//   console.log(error);
// });

// example
// fs.readFile("./example.txt", "utf-8", (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("./test.txt", `${Date.now()} Hey there\n`);
// fs.cpSync("./test.txt", "copy.txt");
// fs.unlinkSync("./copy.txt")
// console.log(fs.statSync("./test.txt"));

// how nodejs work || nodejs arcitacture => user request => Event Queue: (first in first out) => Event Loop: (pickup those request one by one, response if Async || non-blocking else if Sync || blocking code then theared pool ke pass blocking code chala jata he phir theared work karke response return kardeta he) aik theared pool ke pass 4 theared (worker) hote hen

// example of blocking code
// const result = fs.readFileSync("./test.txt", "utf-8");
// console.log("1");
// console.log(result);
// console.log("2");

// example of non-blocking code
console.log("1");
fs.readFile("./test.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

console.log("2");
