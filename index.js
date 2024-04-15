// Q125
// make an object with multiple property and a method that using "this"
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.calculateArea());
