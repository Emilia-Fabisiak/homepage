{
    const welcome = () => {
        console.log("Cześć! Witam wszystkich początkujących deweloperów.");
    }
    
    const taggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName")

        body.classList.toggle("body--grey");
        nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
    };

    const removeHeaderButtonAndImage = () => {
        const headerButton = document.querySelector(".js-button");
        const headerImage = document.querySelector(".js-image");

        headerImage.remove();
        headerButton.remove();
    }    

    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", taggleBackground);

        const headerButton = document.querySelector(".js-button");
        headerButton.addEventListener("click", removeHeaderButtonAndImage);
        welcome();
    }
    
    init ();
   
}