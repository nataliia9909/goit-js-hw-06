const nameInputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (e) => {
if (nameInputEl.value === "") {
    return outputEl.textContent = "Anonymous"
};
outputEl.textContent = e.currentTarget.value});

