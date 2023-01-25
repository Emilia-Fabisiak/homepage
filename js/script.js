console.log("Cześć!");

let header__button = document.querySelector(".js-button");
let header__image = document.querySelector(".js-image");
let changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName")

header__button.addEventListener("click", () => {
    header__image.remove();
    header__button.remove();
});

changeBackgroundButton.addEventListener("click", () => {
    body.classList.toggle("body--grey");
    nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
});
