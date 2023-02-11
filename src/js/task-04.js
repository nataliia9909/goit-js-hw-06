const counterEl = document.querySelector('#counter');
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

const onDecrement = () => {
    counterValue -=1;
    valueEl.textContent = counterValue;
};

const onIncrement = () => {
    counterValue +=1;
    valueEl.textContent = counterValue;
};

buttonDecrementEl.addEventListener("click", onDecrement);
buttonIncrementEl.addEventListener("click", onIncrement);