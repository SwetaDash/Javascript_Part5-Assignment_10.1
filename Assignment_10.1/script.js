class Rectangles {
    constructor(length, breadth){  //Constructor
        this.length = length;
        this.breadth = breadth;
    }

    calculateArea(){    //Method to calulate area
        var area = this.length * this.breadth ;
        console.log("Area of the rectangle is : " + area);
    }
}
let a1 = new Rectangles (12, 15);  // Class Instantiation
a1.calculateArea();