const fs = require("fs");
const { readFileSync, writeFileSync } = fs;
console.log("start");
const first = readFileSync("./PathTest/first.text", "utf8");
const second = readFileSync("./PathTest/NewPath/second.text", "utf8");

console.log(first);
console.log(second);

// create new file writeFileSync
// flag a means to append file
writeFileSync(
  "./PathTest/result-sync.text",
  `This is the generated string: ${first} , ${second}`,
  { flag: "a" }
);
console.log("done with the task");
console.log("starting the next one");
