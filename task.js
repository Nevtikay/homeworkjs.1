"use strict";
function solveEquation(a, b, c) {
    let arr = [];
    let Discriminant = Math.pow(b, 2)-4*a*c;
    if (Discriminant === 0) {
        arr.push(-b/(2*a));
    } else {
        if (Discriminant > 0){
          console.log("Not root");
        } else {
          arr.push((-b + Math.sqrt(Discriminant) )/(2*a)); 
          arr.push((-b - Math.sqrt(Discriminant) )/(2*a));
        }
    }
    return arr; // array
  }
  
  function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount;
  
    // код для задачи №2 писать здесь
  
    return totalAmount;
  }