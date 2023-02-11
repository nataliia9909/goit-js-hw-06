function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const createButtonEl = document.querySelector("button[data-create]");
const destroyButtonEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");


const createBoxes = (amount) => {
  amount = Number(inputEl.value);
  const markup = new Array(amount).fill("").reduce((result, elment, index) => {
    return (result += `<div style = "width: ${30 + index * 10}px; height: ${30 + index * 10}px; background-color: ${getRandomHexColor()}"></div>`)
  }, "");
  boxesEl.insertAdjacentHTML("beforeend", markup);
};

const removeBoxes = () => {
  boxesEl.innerHTML = "";
  inputEl.value = "";
};

createButtonEl.addEventListener("click", createBoxes);
destroyButtonEl.addEventListener("click", removeBoxes);