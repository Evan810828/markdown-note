let Rectangle = class {
    constructor(){
        this.height = 1;
        this.width = 2;
    }
};
console.log(Rectangle.name); // Rectangle


const addOne = (input) => {
    return input + 1;
};
const Array = [1,2,3,4,5];
console.log([addOne(Array)]);