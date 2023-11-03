"use strict";
//~ скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let i = 0;
// while (i >= 0 && i <= 50) {
//   console.log(i);
//   i++;
// }

//~При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//~а не довільний набір символів, не потрібно.

// let enterNumber = prompt("Введіть число");
// let total = 0;
// let check = false;
// do {
//   if (enterNumber) {
//     console.log(typeof Number(enterNumber));
//     console.log(typeof Number(enterNumber) === "number");
//     if (typeof Number(enterNumber) === "number") {
//       total += Number(enterNumber);
//       check = true;
//       enterNumber = prompt("Введіть число");
//     } else {
//       check = true;
//       enterNumber = prompt("Введіть число");
//     }
//   } else {
//     check = false;
//     console.log(total);
//   }
// } while (check);
// {
// }

let enterNumber = prompt("Введіть число", "");
let sum = 0;
let check = true;
do {
  if (enterNumber) {
    if (!isNaN(enterNumber)) {
      sum += Number(enterNumber);
      enterNumber = prompt("Введіть число");
    } else {
      enterNumber = prompt("Ви ввели не число. Введіть число");
    }
  } else {
    check = false;
    console.log(`"Загальна сума введених чисел дорівнює ${sum}."`);
  }
} while (check);
