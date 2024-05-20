// 性別單選器
function gendertooglecolor(gender) {
    const boyBotton = document.querySelector(".boy-1");
    const girlButton = document.querySelector(".girl-0");

    if (gender === 'boy-1') {
        boyButton.classList.add("clicked");
        girlButton.classList.remove("clicked");
    } else if (gender === 'girl-0') {
        girlButton.classList.add("clicked");
        boyButton.classList.remove("clicked");
    }
}