const fs = require("fs")

function theCallBack(error, data){
console.log(data);
}

fs.readFile("a.txt", "utf-8", theCallBack)