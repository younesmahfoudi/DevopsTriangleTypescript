"use strict";
exports.__esModule = true;
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(coteA, coteB, coteC) {
        this.coteA = coteA;
        this.coteB = coteB;
        this.coteC = coteC;
        this.coteA = coteA || 0;
        this.coteB = coteB || 0;
        this.coteC = coteC || 0;
    }
    ;
    Triangle.prototype.sameCote = function () {
        var n = 0;
        this.coteA == this.coteB ? n++ : n;
        this.coteA == this.coteC ? n++ : n;
        this.coteB == this.coteC ? n++ : n;
        return n;
    };
    Triangle.prototype.isIsosceles = function () { return (this.sameCote() == 1); };
    Triangle.prototype.isEquilateral = function () { return (this.sameCote() == 3); };
    Triangle.prototype.isRectangle = function () {
        var a = this.coteA ^ 2;
        var b = this.coteB ^ 2;
        var c = this.coteC ^ 2;
        return (a + b == c || a + c == b || b + c == a);
    };
    Triangle.prototype.isCoherent = function () { return (this.coteC > 0 && this.coteB > 0 && this.coteA > 0); };
    return Triangle;
}());
exports.Triangle = Triangle;
//const triangle = new Triangle(1,5,5);
//console.log("Isoscele : ", triangle.isIsosceles());
//console.log("Rectangle : ", triangle.isRectangle());
//console.log("Coherent : ", triangle.isCoherent());
//console.log("Equilateral : ", triangle.isEquilateral());
