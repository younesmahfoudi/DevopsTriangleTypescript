import {Triangle} from './main';

const triangleISO = new Triangle(1,5,5);
const triangleEQUI = new Triangle(5,5,5);
const triangleRECT = new Triangle(3,4,5);
const triangleCOHE = new Triangle(1,2,5);
const triangleNISO = new Triangle(2,3,5);
const triangleNEQUI = new Triangle(1,2,5);
const triangleNRECT = new Triangle(1,5,5);
const triangleNCOHE = new Triangle(1,0,5);

function test_ISO(triangle: Triangle, neg : boolean): void {
    try {
        switch(triangle.isIsosceles()) {
            case neg: {
                console.log(triangle,' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg,' expected');
                break;
            }
            default: {
                console.log('unknow error : ',triangle);
                break;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function test_EQUI(triangle : Triangle, neg : boolean): void {
    try {
        switch(triangle.isEquilateral()) {
            case neg: {
                console.log(triangle,' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg,' expected');
                break;
            }
            default: {
                console.log('unknow error : ',triangle);
                break;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function test_RECT(triangle : Triangle, neg : boolean): void {
    try {
        switch(triangle.isRectangle()) {
            case neg: {
                console.log(triangle,' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg,' expected');
                break;
            }
            default: {
                console.log('unknow error : ',triangle);
                break;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

function test_COHE(triangle : Triangle, neg : boolean): void {
    try {
        switch(triangle.isCoherent()) {
            case neg: {
                console.log(triangle,' OK');
                break;
            }
            case !neg: {
                console.log('error ', triangle, ' : ', neg,' expected');
                break;
            }
            default: {
                console.log('unknow error : ',triangle);
                break;
            }
        }
    } catch (error) {
        console.error(error);
    }
}

console.log('Test : ISO');
test_ISO(triangleISO, true);
test_ISO(triangleNISO, false);
console.log('Test : RECT');
test_RECT(triangleRECT, true);
test_RECT(triangleNRECT,false);
console.log('Test : COHE');
test_COHE(triangleCOHE,true);
test_COHE(triangleNCOHE,false)
console.log('Test : EQUI');
test_EQUI(triangleEQUI,true);
test_EQUI(triangleNEQUI,false);