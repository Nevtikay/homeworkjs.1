"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let Discriminant = Math.pow(b, 2)-4*a*c;
    let root = -b/(2*a);

    if (Discriminant < 0) {
        console.log('No roots, empty array');
    } if (Discriminant = 0) {
        console.log( `Root 1 ${root}`);
    } else {
        arr.push(-b + Math.sqrt(d) )/(2*a); 
        arr.push(-b - Math.sqrt(d) )/(2*a);
    }
    return arr; // array
  }
  
  function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
  
    // код для задачи №2 писать здесь
  
    return totalAmount;
  }