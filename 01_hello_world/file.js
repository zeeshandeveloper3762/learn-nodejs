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
console.log(fs.statSync("./test.txt"))

