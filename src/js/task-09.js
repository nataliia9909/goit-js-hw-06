const changeColorButtonEl = document.querySelector(".change-color");
const nameOfColorEl = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const onChangeBacgroundColorOfBody = (e) => {
  document.body.style.backgroundColor = getRandomHexColor();
  nameOfColorEl.textContent = document.body.style.backgroundColor;
}

changeColorButtonEl.addEventListener("click", onChangeBacgroundColorOfBody)