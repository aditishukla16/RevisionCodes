//Write the code to read a file synchronously

const fs = require('fs');
const content= fs.readFileSync("a.txt","utf-8");
console.log(contents);

//CPU bound tasks

let ans=0;
for(let i=0;i<=5;i++){
    ans+=i;
}
console.log(ans);

//I/O bound tasks

const fs= require("fs");
const content2= fs.readFileSync("b.txt","utf-8");
console.log(content2);
