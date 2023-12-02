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

/*passwordButton.addEventListener("click", changeButtonText);*/


/*
Завдання 7
При натисканні на коло він повинен слідувати за курсором.
При повторному натисканні він стає в початкове положення.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
<div>
      <p class="taskTitle">ЗАДАЧА 7</p>
      <div class="outerCircle">
        <div class="innerCircle"></div>
      </div>
    </div>
*/

const outerCircleLink = document.querySelector(".outerCircle");

function handelClickOnCircle(event) {
  console.log(event);
  const circle = event.currentTarget;
  if(circle.style.position === "absolute") {
    window.removeEventListener("mousemove", handlerMouseMove);
    circle.style.position = "static";
    return 
  } 
  window.addEventListener("mousemove", handlerMouseMove);
  circle.style.position = "absolute";
};

function handlerMouseMove(event) {
 /* console.log(event.pageX);*/
 
  outerCircleLink.style.top = `${event.pageY - 20}px`;
  outerCircleLink.style.left = `${event.pageX - 20}px`;

};

outerCircleLink.addEventListener("click", handelClickOnCircle);
/*
<!-- ЗАДАЧА 13 -->
    <!-- <p class="taskTitle">ЗАДАЧА 13</p>
    <ul class="grid">
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
      <li class="gridItem"></li>
    </ul> -->