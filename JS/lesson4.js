"use strict";
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

// const swapBtn = document.querySelector("#swapButton");
// const leftSwapInput = document.querySelector("#leftSwapInput");
// const rightSwapInput = document.querySelector("#rightSwapInput");

// function handleSwap() {
//   const valueLeft = leftSwapInput.value;
//   const valueRight = rightSwapInput.value;

//   leftSwapInput.value = valueRight;
//   rightSwapInput.value = valueLeft;
// }

// swapBtn.addEventListener("click", handleSwap);



/*
Завдання 3
Кнопка "Приховати" ховає текст і замінює назву кнопки на
"Розкрити", при повторному натисканні текст знову стає доступним
і кнопка набуває початкового вигляду.
*/


const passwordInput = document.getElementById("passwordInput");
const passwordButton = document.getElementById("passwordButton");

function changeButtonText() {
  if (passwordInput.type === "text") {
    passwordInput.type = "password";
    passwordButton.textContent = "Розкрити";
  } else {
    passwordInput.type = "text";
    passwordButton.textContent = "Приховати";
  }
}

passwordButton.addEventListener("click", changeButtonText);