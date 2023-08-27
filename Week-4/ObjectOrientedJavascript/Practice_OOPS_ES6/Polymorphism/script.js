class Shape {

    calculateArea() {
    }
}

class Rectangle extends Shape {

    calculateArea(width, height) {
        return width * height;
    }
}

class Triangle extends Shape {

    calculateArea(base, height) {
        return (base * height) / 2;
    }
}

class Circle extends Shape {

    calculateArea(radius) {
        return Math.PI * radius * radius;
    }
}

let rectangle = new Rectangle();
let triangle = new Triangle();
let circle = new Circle();

console.log("Area of a rectangle is : " + rectangle.calculateArea(3, 4));
console.log("Area of a triangle is : " + triangle.calculateArea(4, 5));
console.log("Area of a circle is : " + circle.calculateArea(6));