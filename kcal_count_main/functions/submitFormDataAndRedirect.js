//提交數據，頁面重定向
function submitdataform(){
    var age=document.getElementsByClassName("age")[0].value;
    var height=document.getElementsByClassName("height")[0].value;
    var weight=document.getElementsByClassName("weight")[0].value;

    window.location.href="http://localhost:8080/kcal_count/kcal_count2.html"
}


