"use strict";

function solveEquation(a = 1, b = 2, c = 3) {
    let Discriminant = Math.pow(b, 2)-4*a*c;
    let arr;
    let root = -b/(2*a);
switch(Discriminant) {
    case Discriminant = 0:
        console.log( `Root 1 ${root}`);
        break;
    case Discriminant > 0:
        result.x1 = (-b + Math.sqrt(d) )/(2*a);
        result.x2 = (-b - Math.sqrt(d) )/(2*a);
        console.log( `Root ${arr[x1]} and ${arr[x2]}`);
        break;
    case Discriminant < 0:
        console.log('Not root');
        break;   
    default:
        console.log('Error');
        break;
    }
    return arr;
}
