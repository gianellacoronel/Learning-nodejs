const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// If the file doesn't exist, it will be created.
// If the file exists, it will be overwritten.
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result ${first} || ${second}`,
  { flag: "a" }, //This avoid the file being overwritten
);
