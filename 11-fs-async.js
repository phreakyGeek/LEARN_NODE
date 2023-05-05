const fs = require("fs");
const { readFile, writeFile } = fs;
console.log("start");
readFile("./PathTest/first.text", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = data;
  readFile("./PathTest/NewPath/second.text", "utf8", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = data;
    writeFile(
      "./PathTest/result-async.text",
      `This is the generated text: ${first} and ${second}`,
      (error, data) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log("done with the task");
      }
    );
  });
});
console.log("starting next task");
