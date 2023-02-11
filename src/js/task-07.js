const inputFontSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputFontSizeControlEl.addEventListener("input", (e) => {
 textEl.style.fontSize = `${e.currentTarget.value}px`
})

