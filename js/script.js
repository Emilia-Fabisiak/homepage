{
    const welcome = () => {
        console.log("Cześć! Witam wszystkich początkujących deweloperów.");
    }
    
    welcome();
    
    const taggleBackground = () => {
        const body = document.querySelector(".body");
        const nextColorName = document.querySelector(".js-nextColorName")

        body.classList.toggle("body--grey");
        nextColorName.innerText = body.classList.contains("body--grey") ? "białe" : "szare";
    };
    
    const init = () => {
        const changeBackgroundButton = document.querySelector(".js-changeBackgroundButton");
        changeBackgroundButton.addEventListener("click", taggleBackground);
    }
    
    init ();

    let headerButton = document.querySelector(".js-button");
    let headerImage = document.querySelector(".js-image");
    
    headerButton.addEventListener("click", () => {
        headerImage.remove();
        headerButton.remove();
    });
        
}