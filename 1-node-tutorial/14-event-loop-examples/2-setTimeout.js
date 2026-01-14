// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
// completed and exited operating system process

// OUTPUT
// first
// third
// second (This comes in third position because is asyncronous)
