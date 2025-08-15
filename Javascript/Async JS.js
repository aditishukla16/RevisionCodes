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

//Asynchronous file read with callback

const fs = require("fs");

function afterFileRead(err,contents){
    console.log(contents);
}
fs.readFile("c.txt","utf-8",afterFileRead);

//setTimeOut

function run(){
    console.log("you will run after 5s")
}
  setTimeout(run,5000);
  console.log("I will run first");