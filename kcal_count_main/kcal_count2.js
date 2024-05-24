
var ans = localStorage.getItem('outputtdee');
ans=parseFloat(ans);
document.getElementById('showtdee').textContent = "";

var tdeeelement = document.querySelector('.list-item.tdee'); 
// tdeeelement.textContent=`TDEE建議一天的熱量: ${ans} kcal`;
tdeeelement.textContent='TDEE建議一天的熱量: ' + ans + 'kcal';

//我只是暫時加的，測試用，後端根據需要決定要不要留
$.ajax({
    url: '/filter',
    method: 'POST', 
    data: {
        //條件在這
    },
    success: function(response) {

        generateCards(response);
    },
    error: function(xhr, status, error) {

        console.error(error);
    }
});

function generateCards(data) {
    $('.container-right').empty();
    
    data.forEach(function(item) {
        var cardHtml = `
            <div class="card">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">食品名稱: ${item.name}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">商店: ${item.store}</li>
                    <li class="list-group-item">價格: ${item.price}</li>
                    <li class="list-group-item">熱量: ${item.calories}</li>
                </ul>
                <div class="card-body">
                    <a href="./kcal_count4.html"><b class="introduce">食物介紹</b></a>
                </div>
            </div>
        `;
        

        $('.container-right').append(cardHtml);
    });
}