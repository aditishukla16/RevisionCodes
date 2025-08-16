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

//Using a Promise