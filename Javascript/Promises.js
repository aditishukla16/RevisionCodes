// Create a Circle class

class Circle {
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    area() {
        const area=this.radius*this.radius*Math.Pi;
        return area;
    }
    paint(){
        console.log(`painting with color ${color}`);
    }

}
const circle= new Circle(2,"red");

//Creating a Promise

const myPromise=  new Promise((resolve,reject)=>{
    let success = true;
     
    setTimeout(()=>{
        if(success){
            resolve("Data Received Successfully");
        }
        else{
            reject("Something ent Wrong");
        }


    },2000);
   
})

//Using a function that returns a promise



function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));

    }

    function callback(){
        console.log("3 sec have passed");
    }
    setTimeoutPromisified(3000).then(callback)

//Callback Hell Version:😖 Problem: deep nesting → hard to read, hard to maintain.

setTimeout(function(){
    console.log("hi");
    setTimeout(function(){
        console.log("hello");
        setTimeout(function(){
            console.log("hello there");
        },5000);
    },3000);
},1000);

//Better Callback Version:✅ Still callbacks, but flatter and more readable.

function step3Done(){
    console.log("hello there");
}
function step2Done(){
    console.log("hello");
    setTimeout(step3Done,5000);
}
function step1Done(){
    console.log("hi");
    setTimeout(step2Done,3000);
}
setTimeout(step1Done,1000);

//Promisified (bad version → nesting again):😖 This is just callback hell inside .then().
        
setTimeoutPromisified(1000).then(function () {
  console.log("hi");

  setTimeoutPromisified(3000).then(function () {
    console.log("hello");

    setTimeoutPromisified(5000).then(function () {
      console.log("hello there");
    });

  });

});

//Promisified (better version → chaining):✅ Flat, clean, linear execution.
//✅ Each .then() waits for the previous promise to finish.

setTimeoutPromisified(1000)
  .then(function () {
    console.log("hi");
    return setTimeoutPromisified(3000);
  })
  .then(function () {
    console.log("hello");
    return setTimeoutPromisified(5000);
  })
  .then(function () {
    console.log("hello there");
  });

  //async function runSteps() {
  await setTimeoutPromisified(1000);
  console.log("hi");

  await setTimeoutPromisified(3000);
  console.log("hello");

  await setTimeoutPromisified(5000);
  console.log("hello there");


runSteps();

//✨ Reads almost like synchronous code.
//✨ No nesting, no chaining → just await.

//So the evolution looks like this:Callback hell → Better callbacks → Nested Promises → Chained Promises → Async/Await

