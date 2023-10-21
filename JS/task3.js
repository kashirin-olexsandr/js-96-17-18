"use strict";

/* //~Напишіть цикл, який виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max */

function logNumbers(max, min) {
    let sum = 0;
  for (let i = max; i >= min; i -= 1) {
      console.log(i);
    if (i % 2 === 0) {
        sum +=i;
    }
  }
  return sum; 
};

console.log(logNumbers(10, 2)); 