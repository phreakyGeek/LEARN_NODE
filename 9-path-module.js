const path = require("path");

console.log(path.sep);

const filePath = path.join("/PathTest", "NewPath", "Test.text");
console.log("Reletive path is: ", filePath);

const base = path.basename(filePath);
console.log("File basename is:", base);

const absolutePath = path.resolve(
  __dirname,
  "PathTest",
  "NewPath",
  "Test.text"
);

console.log("Absolute Path is: ", absolutePath);
