const foods = [
    {foodID:207,name:"LADEARS生乳半月燒",Kcal:185,price:42,kind:"甜點",cs:"seven",like:4,img:"https://drive.google.com/file/d/19iZaGNi53KyDagD6i3ZDsNd4sSKOCcF9/view?usp=drive_link"},
    {foodID:208,name:"LADEARS爆餡羅馬生乳包",Kcal:260,price:65,kind:"甜點",cs:"ok",like:11,img:"https://drive.google.com/file/d/1gpRpeyQtrA-XJDcgNbK-ii4OpxqQkW1D/view?usp=drive_link"},
    {foodID:209,name:"LADEARS提拉米蘇蛋糕杯",Kcal:198,price:59,kind:"甜點",cs:"ok",like:5,img:"https://drive.google.com/file/d/1huEW8KT4CFrIb6l9c7VgHuOnXFH_Iaet/view?usp=drive_link"},
    {foodID:210,name:"LADEARS巴斯克乳酪蛋糕",Kcal:210.3,price:55,kind:"甜點",cs:"seven",like:0,img:"https://drive.google.com/file/d/1Hbd5vqYDtbLcGUOlSqNms3bZ9juSorYb/view?usp=drive_link"},
    {foodID:211,name:"LADEARS法式檸檬塔",Kcal:283,price:49,kind:"甜點",cs:"seven",like:3,img:"https://drive.google.com/file/d/1lWbyCPVK7P6Psrh0utNC9s-g-tKXGJ_D/view?usp=drive_link"},
    {foodID:212,name:"LADEARS焦糖德式布丁",Kcal:270,price:49,kind:"甜點",cs:"seven",like:0,img:"https://drive.google.com/file/d/13GkIW_QYpnGoPy-n8NHHnbuxnhR7qLAA/view?usp=drive_link"},
    {foodID:213,name:"LADEARS黑森林蛋糕",Kcal:213.5,price:59,kind:"甜點",cs:"family",like:2,img:"https://drive.google.com/file/d/1RA_CexFph-n1W5qVJikHrdEiEGzDFyyi/view?usp=drive_link"},
    {foodID:214,name:"LADEARS芋泥生乳捲",Kcal:252.3,price:65,kind:"甜點",cs:"family",like:88,img:"https://drive.google.com/file/d/1eU_84tF40IkXg86EeyKjT4LVp4XxfsQu/view?usp=drive_link"},
];

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