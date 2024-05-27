var ans = localStorage.getItem('outputtdee');
ans = parseFloat(ans);

var tdeeelement = document.querySelector('.list-item.tdee'); 
tdeeelement.textContent = 'TDEE建議一天的熱量: ' + ans + 'kcal';

let shoppingCart = [];
var totalprice = 0;
var totalkcal = 0;
var totalamount = 0;

function addtoshoppingcart(name2, price1, calories1) {
    let item = shoppingCart.find(item => item.name === name2);
    if (!item) {
        item = {
            name: name2,
            price: price1,
            calories: calories1,
            amount: 1 
        };
        shoppingCart.push(item);
    } else {
        item.amount++;
    }

    totalamount = calculateTotalAmount(shoppingCart);
    totalprice = calculateTotalPrice(shoppingCart);
    totalkcal = calculateTotalKcal(shoppingCart);

    updatetop(); 
    updateShoppingCart(); 
}

function increment(name) {
    let item = shoppingCart.find(item => item.name === name);
    if (item && item.amount < 100) {
        item.amount++;
        totalamount = calculateTotalAmount(shoppingCart); 
        totalprice = calculateTotalPrice(shoppingCart); 
        totalkcal = calculateTotalKcal(shoppingCart); 
        updateShoppingCartItem(name);
        updatetop(); 
    }
}

function decrement(name) {
    let item = shoppingCart.find(item => item.name === name);
    if (item && item.amount > 1) {
        item.amount--;
        totalamount = calculateTotalAmount(shoppingCart); 
        totalprice = calculateTotalPrice(shoppingCart); 
        totalkcal = calculateTotalKcal(shoppingCart); 
        updateShoppingCartItem(name);
        updatetop(); 
    } else if (item && item.amount === 1) {
        shoppingCart = shoppingCart.filter(cartItem => cartItem.name !== name);
        totalamount = calculateTotalAmount(shoppingCart); 
        totalprice = calculateTotalPrice(shoppingCart); 
        totalkcal = calculateTotalKcal(shoppingCart); 
        updateShoppingCart();
        updatetop(); 
    }
}

function calculateTotalAmount(cart) {
    return cart.reduce((total, item) => total + item.amount, 0);
}

function calculateTotalPrice(cart) {
    return cart.reduce((total, item) => total + (item.price * item.amount), 0);
}

function calculateTotalKcal(cart) {
    return cart.reduce((total, item) => total + (item.calories * item.amount), 0);
}

function updatetop() {
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
                        <b class="list-item">價格: ${totalprice} 元</b>
                    </li>    
                    <li>
                        <b class="list-item">熱量: ${totalkcal} kcal</b>
                    </li>
                    <li>
                        <b class="list-item">數量: ${totalamount} 個</b>
                    </li>
                    <br>
                </ul>
            </nav>
        </div>
        `;
    $('.left-top').append(lefttopHtml);
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
        totalamount = calculateTotalAmount(shoppingCart); 
        totalprice = calculateTotalPrice(shoppingCart); 
        totalkcal = calculateTotalKcal(shoppingCart); 
        updateShoppingCartItem(name);
        updatetop(); 
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
            <div class="shoppingcart" id="cart-item-${item.name}">    
                <br><b class="name-in-cart">${item.name}</b><br>
                <p class="data-in-cart">${item.price}元&nbsp;${item.calories}kcal</p>
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