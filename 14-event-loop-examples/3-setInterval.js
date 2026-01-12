setInterval(() => {
  console.log("Hello world!");
}, 2000);
console.log("I will run first");
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error

// OUTPUT
// I will run first
// Hello world!
// Hello world!
// Hello world!
// Hello world!
// .
// .
// .
// Until put CTRL + C
