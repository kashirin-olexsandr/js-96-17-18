"use strict";

// Що виведе наступний код?
// let fruits = ["Яблука", "Груша", "Апельсин"];
// Додаємо нове значення в "копію"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// що у fruits?
// console.lo( fruits.length );

//Напишіть функцію min(a, b), яка повертає
//менше з чисел a, b
//Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (typeof a === "number" && typeof b === "number") {
//     return a < b ? a : b;
//   }
// }

// console.log(min(15, 10));

//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [12, 5, 35, 56, 3, 24, 7, 80, 12];

function findSmallerNumber(numbers) {
    let min = numbers[0];
    for (let number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(findSmallerNumber([12, 5, 35, 56, 3, 24, 7, 80, 12]))