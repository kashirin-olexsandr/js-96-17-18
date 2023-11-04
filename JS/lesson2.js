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

// function findSmallerNumber(numbers) {
//     let min = numbers[0];
//     for (let number of numbers) {
//         if (number < min) {
//             min = number;
//         }
//     }
//     return min;
// }
// console.log(findSmallerNumber([12, 5, 35, 56, 3, 24, 7, 80, 12]))

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//   let sumNamber = 0;
//   let totalNam = 0;
//   for (const i of arguments) {
//     if (typeof i === "number") {
//       sumNamber += i;
//       totalNam += 1;
//     }
//   }
//   return sumNamber / totalNam;
// }
// console.log(caclculateAverage(1, 2, 3, "5", 10));


//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку
// "Nunc sed turpis a felis in nunc fringilla"

function findLongestWord(string) {
    const stringSplit = string.split(" ");
    let longestWord = stringSplit[0];
    for (const word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("Nunc sed turpis a felissgsgfgs in nunc fringill"))

//Напишіть функції для роботи з масивом
//add(name) додає курс до кінця колекції
//removeCourse(name) видаляє курс із колекції
//updateCourse(oldName, newName) змінює ім'я на нове

const obj ={
    cources: [],
    add(name){
        this.cources.push(name)
    },
    removeCourse(name){
        let index = this.cources.indexOf(name)
        if(index !== -1){
            this.cources.splice(index, 1)
        }
    },
    updateCourse(oldName, newName){
        for(let i = 0; i <this.cources.length; i+=1){
            if(this.cources[i] === oldName){
                this.cources[i] = newName;
            };
        };
    },
};

obj.add("html");
obj.add("js");
obj.add("css");
console.log(obj.cources);
obj.removeCourse("html");
console.log(obj.cources);
obj.updateCourse("js", "react");
console.log(obj.cources);

