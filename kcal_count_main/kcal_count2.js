
var ans = localStorage.getItem('outputtdee');
ans=parseFloat(ans);

var tdeeelement = document.querySelector('.list-item.tdee'); 
tdeeelement.textContent='TDEE建議一天的熱量: ' + ans + 'kcal';

let shoppingCart = [];

// 加入購物車
function addtoshoppingcart(name2, price1, calories1) {
    // 檢查該項目是否已經在購物車中
    let item = shoppingCart.find(item => item.name === name2);
    if (!item) {
        // 如果項目不存在，創建一個新項目並添加到購物車中
        item = {
            name: name2,
            price: price1,
            calories: calories1,
            amount: 1 // 預設數量為1
        };
        updatetop(item.amount,item.calories,item.price);
        shoppingCart.push(item);

        // 創建新的購物車項目HTML
        var shoppingcarHtml = `
            <div class="shoppingcart" id="cart-item-${name2}">    
                <br><b class="name-in-cart">${name2}</b><br>
                <p class="data-in-cart">${price1}元&nbsp;${calories1}kcal</p>
                <div class="quantity-container">
                    <button class="quantity-button" onclick="decrement('${name2}')">-</button>
                        <input type="number" class="quantity-input" value="${item.amount}" min="1" max="100" oninput="updateAmount('${name2}', this.value)">
                    <button class="quantity-button" onclick="increment('${name2}')">+</button>
                </div>
            </div>
        `;
        $('.left-bottom').append(shoppingcarHtml);
    } else {
        // 如果項目已存在，則增加其數量
        item.amount++;
        // 更新已存在的購物車項目的數量顯示
        $(`#cart-item-${name2} .quantity-input`).val(item.amount);
    }
}

var totalprice=0;
var totalkcal=0;
var totalamount=0;

function increment(name) {
    let item = shoppingCart.find(item => item.name === name);
    if (item && item.amount < 100) {
        item.amount++;
        totalamount = calculateTotalAmount(shoppingCart); // 更新總數量
        totalprice = calculateTotalPrice(shoppingCart); // 更新總價格
        totalkcal = calculateTotalKcal(shoppingCart); // 更新總熱量
        updateShoppingCartItem(name);
        updatetop(totalamount,totalkcal,totalprice); // 更新顯示
    }
}

function decrement(name) {
    let item = shoppingCart.find(item => item.name === name);
    if (item && item.amount > 1) {
        item.amount--;
        totalamount = calculateTotalAmount(shoppingCart); // 更新總數量
        totalprice = calculateTotalPrice(shoppingCart); // 更新總價格
        totalkcal = calculateTotalKcal(shoppingCart); // 更新總熱量
        updateShoppingCartItem(name);
        updatetop(totalamount,totalkcal,totalprice); // 更新顯示
    } else if (item && item.amount === 1) {
        shoppingCart = shoppingCart.filter(cartItem => cartItem.name !== name);
        totalamount = calculateTotalAmount(shoppingCart); // 更新總數量
        totalprice = calculateTotalPrice(shoppingCart); // 更新總價格
        totalkcal = calculateTotalKcal(shoppingCart); // 更新總熱量
        updateShoppingCart();
        updatetop(totalamount,totalkcal,totalprice); // 更新顯示
    }
}

// 函式以shoppingCart作為參數，計算並返回總數量
function calculateTotalAmount(cart) {
    return cart.reduce((total, item) => total + item.amount, 0);
}

// 函式以shoppingCart作為參數，計算並返回總價格
function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + (item.price * item.amount), 0);
}

// 函式以shoppingCart作為參數，計算並返回總熱量
function calculateTotalKcal(cart) {
    return cart.reduce((total, item) => total + (item.calories * item.amount), 0);
}


function updatetop(num,cal,p){
    $('.left-top').empty();
    var lefttopHtml = `
        <div class="left-top">
        <!-- 導覽列 -->
            <nav id="sidebar">
                <i class="fa-solid fa-cart-shopping cart-icon"></i><br>
                <!-- list 列表 -->
                <ul class="list-unstyled">
                    <b class="top-name">To eat list</b><br><br>
                    <li>
                        <b class="list-item">價格: ${p} 元</b>
                    </li>    
                    <li>
                        <b class="list-item">熱量: ${cal} kcal</b>
                    </li>
                    <li>
                        <b class="list-item">數量: ${num} 個</b>
                    </li>
                    <br>
                </ul>
            </nav>
        </div>
        `;
        $('.left-top').append(lefttopHtml)
    
}



function updateAmount(name, value) {
    let item = shoppingCart.find(item => item.name === name);
    let amount = parseInt(value);
    if (item) {
        if (isNaN(amount) || amount < 1) {
            item.amount = 1;
        } else if (amount > 100) {
            item.amount = 100;
        } else {
            item.amount = amount;
        }
        updateShoppingCartItem(name);
    }
}

function updateShoppingCartItem(name) {
    let item = shoppingCart.find(item => item.name === name);
    if (item) {
        $(`#cart-item-${name} .quantity-input`).val(item.amount);
    }
}

function updateShoppingCart() {
    $('.left-bottom').empty();
    shoppingCart.forEach(item => {
        var shoppingcarHtml = `
            <div class="shoppingcart">     
                <b>${item.name}</b><br>
                <p>${item.price}元&nbsp;${item.calories}kcal</p>
                <div class="quantity-container">
                    <button class="quantity-button" onclick="decrement('${item.name}')">-</button>
                    <input type="number" class="quantity-input" value="${item.amount}" min="1" max="100" oninput="updateAmount('${item.name}', this.value)">
                    <button class="quantity-button" onclick="increment('${item.name}')">+</button>
                </div>
            </div>
        `;
        $('.left-bottom').append(shoppingcarHtml);
    });
}