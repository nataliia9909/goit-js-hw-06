const loginFormEl = document.querySelector(".login-form");



const onFormSubmit = (e) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === "" || password === "") {
        return alert("У формі є незаповнені поля, для відправки форми ВСІ поля повинні бути заповненими!");

    }

        const formData = {
        email,
        password,
             }

    console.log(formData);
    e.currentTarget.reset();



}

loginFormEl.addEventListener("submit", onFormSubmit);