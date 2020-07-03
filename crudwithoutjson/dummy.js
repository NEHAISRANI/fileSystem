var fs = require("fs");
var contents = fs.readFileSync("dummy.json");
var jsonContent = JSON.parse(contents);
console.log(jsonContent.username);
console.log(jsonContent.email);
console.log(jsonContent.password);

