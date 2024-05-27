
var genderfactor=0;
var exerciselevel=0;
var BMR=0;
var TDEE=0;


// 性別單選器
function toogleGenderButtonStyle(selectgender) {
    const boyButton = document.querySelector(".boy");
    const girlButton = document.querySelector(".girl");

    if (selectgender === 'boy') {
        boyButton.classList.add("clicked");
        girlButton.classList.remove("clicked");
        genderfactor=66.5;
    } else if (selectgender === 'girl') {
        girlButton.classList.add("clicked");
        boyButton.classList.remove("clicked");
        genderfactor=655;
    }
}

// 運動頻率單選器
function toogleExerciseIntensityButton(frequence) {
    const lightbutton = document.querySelector(".light-button");
    const mediumbutton = document.querySelector(".medium-button");
    const heavybutton = document.querySelector(".heavy-button");

    if (frequence === 'light-button') {
        lightbutton.classList.add("clicked");
        mediumbutton.classList.remove("clicked");
        heavybutton.classList.remove("clicked");
        exerciselevel=0.35;
    } 
    else if (frequence === 'medium-button') {
        lightbutton.classList.remove("clicked");
        mediumbutton.classList.add("clicked");
        heavybutton.classList.remove("clicked");
        exerciselevel=0.5;
    }
    else if (frequence === 'heavy-button') {
        lightbutton.classList.remove("clicked");
        mediumbutton.classList.remove("clicked");
        heavybutton.classList.add("clicked");
        exerciselevel=1.0;
    }

}

function submitFormDataAndRedirect(){
    var Age=parseFloat(document.getElementById("age").value) ;
    Age=parseFloat(Age);
    var Height=document.getElementById("height").value;
    Height=parseFloat(Height);
    var Weight=document.getElementById("weight").value;
    Weight=parseFloat(Weight);

    if(genderfactor===66.5){
        BMR=parseFloat(66.5+(13.7*Weight)+(5*Height)-(6.8*Age));
    }
    else if(genderfactor===655){
        BMR=parseFloat(655+(9.6*Weight)+(1.8*Height)-(4.7*Age));
    }

    TDEE=parseFloat(10*BMR*(1+exerciselevel)/9);
    TDEE = parseFloat(TDEE.toFixed(1));

    localStorage.setItem('outputtdee', TDEE);

    window.location.href="./kcal_count2.html"
}