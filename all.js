// 性別單選器
function gendertooglecolor(gender) {
    const boyButton = document.querySelector(".boy-1");
    const girlButton = document.querySelector(".girl-0");

    if (gender === 'boy-1') {
        boyButton.classList.add("clicked");
        girlButton.classList.remove("clicked");
    } else if (gender === 'girl-0') {
        girlButton.classList.add("clicked");
        boyButton.classList.remove("clicked");
    }
}

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

function submitdataform(){
    var age=document.getElementsByClassName("age").value;
    var height=document.getElementsByClassName("height").value;
    var weight=document.getElementsByClassName("weight").value;

    window.location.href="http://localhost:8080/kcal_count/kcal_count2.html"
}
