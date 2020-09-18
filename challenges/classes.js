// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMake {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
        this.volume1 = 0;
        this.surfaceArea1 = 0;
    }
    volume() {
        return this.volume1 = (this.length * this.width * this.height)
    }
    surfaceArea() {
        return this.surfaceArea1 = (2 * (this.length * this.width + this.length * this.height+ this.width * this.height))
    }  
}  
const cuboi = new CuboidMake(4,5,5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboi.volume()); // 100
console.log(cuboi.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.