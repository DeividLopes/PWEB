const fs = require("fs");
fs.readFile("file.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
for (let index = 0; index < 10; index++) {
  console.log("segunda parte" + index);
}
