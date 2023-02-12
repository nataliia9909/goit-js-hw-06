const changeColorButtonEl = document.querySelector(".change-color");
const nameOfColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const onChangeBacgroundColorOfBody = (e) => {
const randomColorBackground = document.body.style.backgroundColor;

  randomColorBackground = getRandomHexColor();
  nameOfColorEl.textContent = randomColorBackground;
}

changeColorButtonEl.addEventListener("click", onChangeBacgroundColorOfBody)