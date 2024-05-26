// 選定某家超商，並針對價錢做降冪排序
function CSFwPriDesc(foods, storeName, sortBy = 'price') {
  // 篩選出特定店家的所有食物
  const filteredFoods = foods.filter(food => food.cs === storeName);

  // 根據指定的條件做排序
  const sortedFoods = filteredFoods.sort((a, b) => b[sortBy] - a[sortBy]);

  return sortedFoods;
}

// 舉例：選取711的所有食物，並按照價錢由高排到低
/*
const sevenFoods = CSFwPriDesc(foods, 'seven');
console.log(sevenFoods);
*/

// 選定某家超商，並針對熱量做降冪排序
function CSFwKcalDesc(foods, storeName, sortBy = 'Kcal') {
  // 篩選出特定店家的所有食物
  const filteredFoods = foods.filter(food => food.cs === storeName);

  // 根據指定的條件做排序
  const sortedFoods = filteredFoods.sort((a, b) => b[sortBy] - a[sortBy]);

  return sortedFoods;
}

/*
// 舉例：選取全家的所有食物，並按照熱量由高排到低
const familyFoods = CSFwKcalDesc(foods, 'family');
console.log(familyFoods);
*/

// 選定某家超商，並針對價錢做升冪排序
function CSFwPriAsc(foods, storeName, sortBy = 'price') {
  // 篩選出特定店家的所有食物
  const filteredFoods = foods.filter(food => food.cs === storeName);

  // 根據指定的條件做排序
  const sortedFoods = filteredFoods.sort((a, b) => a[sortBy] - b[sortBy]);

  return sortedFoods;
}

// 舉例：選取711的所有食物，並按照價錢由低排到高
/*
const sevenFoods = CSFwPriAsc(foods, 'seven');
console.log(sevenFoods);
*/

// 選定某家超商，並針對熱量做升冪排序
function CSFwKcalAsc(foods, storeName, sortBy = 'Kcal') {
  // 篩選出特定店家的所有食物
  const filteredFoods = foods.filter(food => food.cs === storeName);

  // 根據指定的條件做排序
  const sortedFoods = filteredFoods.sort((a, b) => a[sortBy] - b[sortBy]);

  return sortedFoods;
}


// 舉例：選取全家的所有食物，並按照熱量由低排到高
/*
const familyFoods = CSFwKcalAsc(foods, 'family');
console.log(familyFoods);
*/


// 所有食品根據價錢做降冪排序
function FwPriDesc(foods) {
  // 根據指定的條件做排序
  return foods.slice().sort((a, b) => b.price - a.price);
}

// 所有食品根據熱量做降冪排序
function FwKcalDesc(foods) {
  // 根據指定的條件做排序
  return foods.slice().sort((a, b) => b.Kcal - a.Kcal);
}

// 根據輸入的food_ID，將對應的食品按讚數量+1
function LikeFood(foodId) {
  const food = foods.find(f => f.foodID === foodId);

  food.like += 1;
}

// 所有食品根據按讚數量做降冪排序
function FoodByLike(foods, sortBy = 'like') {
  return foods.slice().sort((a,b) => b.like - a.like);
}

// 舉例
/*
const LikeNum = FoodByLike(foods);
console.log(LikeNum);
*/

// 所有食品根據價錢做升冪排序
function FwPriAsc(foods) {
  // 根據指定的條件做排序
  return foods.slice().sort((a, b) => a.price - b.price);
}

// 所有食品根據熱量做升冪排序
function FwKcalAsc(foods) {
  // 根據指定的條件做排序
  return foods.slice().sort((a, b) => a.Kcal - b.Kcal);
}

//選取一樣商品(先預設能給予函式一個輸入的參數foodId)，並列出該食品的價格
function FindFoodPrice(foods, foodId) {
  const food = foods.find(f => f.foodID === foodId);
  return food.price;
}

// 顯示食物價格(先存著)
/*
function ShowFoodPrice() {
  const foodIdInput = document.getElementById('foodIdInput').value;
  const foodId = parseInt(foodIdInput, 10);

  const price = FindFoodPrice(foodId);
  document.getElementById('result').innerText = `Price of food with ID ${foodId}: ${price}`;
}
*/

//選取一樣商品(先預設能給予函式一個輸入的參數foodId)，並列出該食品的熱量
function FindFoodKcal(foods, foodId) {
  const food = foods.find(f => f.foodID === foodId);
  return food.Kcal;
}

// 顯示食物熱量(先存著)
/*
function ShowFoodKcal() {
  const foodIdInput = document.getElementById('foodIdInput').value;
  const foodId = parseInt(foodIdInput, 10);

  const price = FindFoodKcal(foodId);
  document.getElementById('result').innerText = `Calories of food with ID ${foodId}: ${Kcal}`;
}
*/

// 選取特定商家的所有食品
function FoodwCS(foods, storeName) {
  return foods.filter(food => food.cs === storeName);
}

// 選取特定種類的所有食品
function FoodwKind(foods, foodKind) {
  return foods.filter(food => food.kind === foodKind);
}

// 根據輸入的food_ID，新增對應食品的留言(內容為content)
/*
let comm = [];
let commId = 1;
*/
function AddComm(foodId) {
const userInput = document.getElementById('user-input').value;
// 檢查輸入是否為空
if (userInput.trim() === "") {
  alert("評論不能為空");
  return;
  }

const newComm = {
  comm_ID: commId++,
  foodID: foodId,
  content: userInput,
  comm_like: 0 // 預設初始按讚數量為0
};

comm.push(newComm);
document.getElementById('user-input').value = '';
}

// 舉例
/*
AddComm('Good', 208);

console.log(comm);
*/

// 根據輸入的comm_ID，將對應的留言按讚數量+1
function LikeComm(commId) {
const comment = comm.find(r => r.comm_ID === commId);

comment.comm_like += 1;
}

// 舉例
/*
LikeComm(1);

console.log(comm);
*/

// 將某一食品的所有留言根據按讚數量做降冪排序
function CommByLike(foodId) {
const comments = comm.filter(review => review.foodID === foodId);
comments.sort((a, b) => b.like - a.like);
return comments;
}

// 將某一食品的所有留言根據評論時間近到遠做排序
function CommByNew(foodId) {
const comments = comm.filter(review => review.foodID === foodId);
comments.sort((a, b) => b.comm_ID - a.comm_ID);
return comments;
}

// 顯示食品列表
function displayFoods(foods) {
const container = document.querySelector('.container-card');
container.innerHTML = ''; // 清空現有内容
foods.forEach(food => {
  generateCard(food.name, food.cs, food.price, food.Kcal, food.img, food.foodID);
});
}

function generateCard(name1, store, price, calories, img, foodID) {
  var cardHtml = `
      <div class="card">     
          <div class="img-container">
              <img src="${img}" class="card-img-top" alt="...">
              <div class="add-button">
                <button id="add-to-cart" class="btn btn-primary" onclick="addtoshoppingcart('${name1}', ${price}, ${calories})">
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
                  <a href="./kcal_count3.html?foodID=${foodID}" class="seeMore">See more...</a>
              </li>            
          </ul>
      </div>
  `;
  $('.container-card').append(cardHtml);
}
displayFoods(foods);