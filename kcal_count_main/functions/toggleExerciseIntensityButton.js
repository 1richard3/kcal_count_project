// 運動頻率單選器
function arrowtooglecolor(frequence) {
    const lightbutton = document.querySelector(".light-button");
    const mediumbutton = document.querySelector(".medium-button");
    const heavybutton = document.querySelector(".heavy-button");

    if (frequence === 'light-button') {
        lightbutton.classList.add("clicked");
        mediumbutton.classList.remove("clicked");
        heavybutton.classList.remove("clicked");
    } 
    else if (frequence === 'medium-button') {
        lightbutton.classList.remove("clicked");
        mediumbutton.classList.add("clicked");
        heavybutton.classList.remove("clicked");
    }
    else if (frequence === 'heavy-button') {
        lightbutton.classList.remove("clicked");
        mediumbutton.classList.remove("clicked");
        heavybutton.classList.add("clicked");
    }

}
