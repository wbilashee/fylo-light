const links = document.querySelectorAll("a[href='#']");
links.forEach(link => link.addEventListener("click", (e) => {
    e.preventDefault();
}));

const forms = document.querySelectorAll("form");
forms.forEach(form => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = e.target.querySelector("input");
        const error = e.target.querySelector(".error");
        const value = email.value;
        error.style.display = "none";
        email.classList.remove("invalid");

        if (value === "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) === false) {
            error.style.display = "block";
            email.classList.add("invalid");
        } else {
            email.value = "";
        }
    });
});