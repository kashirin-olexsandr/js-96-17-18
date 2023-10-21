"use strict";

/* //~Напишіть цикл, який виводить у консоль
//~ числа від max до min за спаданням
//~ Додайте усі парні числа від min до max */

function logNumbers(max, min) {
  for (let i = max; i >= min; i -= 1) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};

console.log(logNumbers(100, 25));