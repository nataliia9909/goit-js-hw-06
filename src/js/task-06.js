const validationInput = document.querySelector("#validation-input");

const isValidInput = (e) => {
    if(e.currentTarget.value.length === Number(validationInput.dataset.length)) {
    
        validationInput.classList.remove("invalid");    
        validationInput.classList.add("valid");
        return
        
    } 

    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");

}


validationInput.addEventListener("blur", isValidInput);







//  const textLength = validationInput.getAttribute("data-length");
//  console.log(textLength);

//  if(e.currentTarget.value.length === Number(textLength)) {

//     validationInput.classList.remove("invalid");    
//     validationInput.classList.add("valid");
//     return
//     } 

//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");

// }
// validationInput.addEventListener("blur", isValidInput);

