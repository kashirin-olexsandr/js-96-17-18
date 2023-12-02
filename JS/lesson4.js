"use strict";
/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/

const swapBtn = document.querySelector("#swapButton");
const leftSwapInput = document.querySelector("#leftSwapInput");
const rightSwapInput = document.querySelector("#rightSwapInput");

function handleSwap() {
  const valueLeft = leftSwapInput.value;
  const valueRight = rightSwapInput.value;

  leftSwapInput.value = valueRight;
  rightSwapInput.value = valueLeft;
}

swapBtn.addEventListener("click", handleSwap);
