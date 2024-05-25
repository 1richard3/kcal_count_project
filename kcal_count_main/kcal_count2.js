
var ans = localStorage.getItem('outputtdee');
ans=parseFloat(ans);
document.getElementById('showtdee').textContent = "";

var tdeeelement = document.querySelector('.list-item.tdee'); 
tdeeelement.textContent='TDEE建議一天的熱量: ' + ans + 'kcal';

// 動態生成食物小卡
function generateCard(name1, store, price, calories, img) {
    var cardHtml = `
        <div class="card">     
            <div class="img-container">
                <img src="${img}" class="card-img-top" alt="...">
                <div class="add-button">
                    <button class="btn btn-primary">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">食品名稱: ${name1}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item2">                                  
                    <div class="row">
                        <div class="col">價格: ${price} 元</div>
                        <div class="col">熱量: ${calories} kcal</div>
                    </div>
                </li>
                <li class="list-group-item">商店: ${store}</li>
                <li class="list-seeMore"> 
                    <a href="./kcal_count4.html" class="seeMore">See more...</a>
                </li>            
            </ul>
        </div>
    `;
    $('.container-card').append(cardHtml);
}



// 輸出食物小卡
foods.forEach(item => {
    generateCard(item['name'], item['cs'], item['price'], item['Kcal'],item['img']);
});


