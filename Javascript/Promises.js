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