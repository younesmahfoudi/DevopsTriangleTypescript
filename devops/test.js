"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var triangleISO = new main_1.Triangle(1, 5, 5);
var triangleEQUI = new main_1.Triangle(5, 5, 5);
var triangleRECT = new main_1.Triangle(3, 4, 5);
var triangleCOHE = new main_1.Triangle(1, 2, 5);
var triangleNISO = new main_1.Triangle(2, 3, 5);
var triangleNEQUI = new main_1.Triangle(1, 2, 5);
var triangleNRECT = new main_1.Triangle(1, 5, 5);
var triangleNCOHE = new main_1.Triangle(1, 0, 5);
function test_ISO(triangle, neg) {
    try {
        switch (triangle.isIsosceles()) {
            case neg: {
                console.log(triangle, ' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg, ' expected');
                break;
            }
            default: {
                console.log('unknow error : ', triangle);
                break;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function test_EQUI(triangle, neg) {
    try {
        switch (triangle.isEquilateral()) {
            case neg: {
                console.log(triangle, ' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg, ' expected');
                break;
            }
            default: {
                console.log('unknow error : ', triangle);
                break;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function test_RECT(triangle, neg) {
    try {
        switch (triangle.isRectangle()) {
            case neg: {
                console.log(triangle, ' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg, ' expected');
                break;
            }
            default: {
                console.log('unknow error : ', triangle);
                break;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
function test_COHE(triangle, neg) {
    try {
        switch (triangle.isCoherent()) {
            case neg: {
                console.log(triangle, ' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg, ' expected');
                break;
            }
            default: {
                console.log('unknow error : ', triangle);
                break;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
}
console.log('Test : ISO');
test_ISO(triangleISO, true);
test_ISO(triangleNISO, false);
console.log('Test : RECT');
test_RECT(triangleRECT, true);
test_RECT(triangleNRECT, false);
console.log('Test : COHE');
test_COHE(triangleCOHE, true);
test_COHE(triangleNCOHE, false);
console.log('Test : EQUI');
test_EQUI(triangleEQUI, true);
test_EQUI(triangleNEQUI, false);
