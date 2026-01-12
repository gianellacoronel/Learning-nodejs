const { readFile } = require("fs");

console.log("started a first task");
// CHECK FILE PATH!!!
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// OUTPUT
// started a first task
// starting next task
// Hello this is first text file.

// completed first task
