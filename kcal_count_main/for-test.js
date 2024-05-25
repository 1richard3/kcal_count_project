

// function generateCard(name, store, price, calories) {
//   // 创建 card 元素
//   const card = document.createElement('div');
//   card.classList.add('card');

//   // 图片
//   const img = document.createElement('img');
//   img.classList.add('card-img-top');
//   img.src = ''; // 替換成圖片的URL
//   img.alt = name;


//   // card-body
//   const cardBody = document.createElement('div');
//   cardBody.classList.add('card-body');
//   const cardTitle = document.createElement('h5');
//   cardTitle.classList.add('card-title');
//   cardTitle.textContent = '食品名稱: '+name;
//   cardBody.appendChild(cardTitle);

//   // list-group
//   const listGroup = document.createElement('ul');
//   listGroup.classList.add('list-group', 'list-group-flush');
//   const storeItem = document.createElement('li');
//   storeItem.classList.add('list-group-item');
//   storeItem.textContent = '商店: '+store;
//   const priceItem = document.createElement('li');
//   priceItem.classList.add('list-group-item');
//   priceItem.textContent = '價格: ' +price;
//   const caloriesItem = document.createElement('li');
//   caloriesItem.classList.add('list-group-item');
//   caloriesItem.textContent = '熱量: ' +calories;
//   const seeMoreItem = document.createElement('li');
//   seeMoreItem.classList.add('list-group-item');
//   seeMoreItem.style.display = 'flex';
//   seeMoreItem.style.alignItems = 'center';
//   const seeMoreLink = document.createElement('a');
//   seeMoreLink.href = './kcal_count4.html';
//   seeMoreLink.textContent = 'See more...';
//   seeMoreItem.appendChild(seeMoreLink);

//   listGroup.appendChild(storeItem);
//   listGroup.appendChild(priceItem);
//   listGroup.appendChild(caloriesItem);
//   listGroup.appendChild(seeMoreItem);

//   // 将所有元素添加到 card 中
//   card.appendChild(img);
//   card.appendChild(cardBody);
//   card.appendChild(listGroup);

//   // 返回 card 元素
//   return card;
// }


// 以下是全家的資料陣列------------------------------------------------------------------------------------------------------------------------------
const xlsx = require('xlsx');
const path = require('path');

// 讀取 Excel 文件
const familymartfilePath = path.resolve('../product_data/Family_product.xlsx');
const familymartworkbook = xlsx.readFile(familymartfilePath);

// 選擇要讀取的工作表
const familymartsheetName = familymartworkbook.SheetNames[0]; // 讀取第一個工作表
const familymartworksheet = familymartworkbook.Sheets[familymartsheetName];

// 將工作表轉換為 JSON 格式
const familymartdata = xlsx.utils.sheet_to_json(familymartworksheet, { header: 1 });

const familymartarray = familymartdata.slice(1).map(item => ({
    "商店": item[0],
    "品名": item[1],
    "價格": item[2],
    "熱量": item[3]
  }));
// 以上是全家的資料陣列------------------------------------------------------------------------------------------------------------------------------

console.log('全家的資料陣列: ', familymartarray);

// 以下是小七的資料陣列------------------------------------------------------------------------------------------------------------------------------

// 讀取 Excel 文件
const sevenfilePath = path.resolve('../product_data/711_product.xlsx');
const sevenworkbook = xlsx.readFile(sevenfilePath);

// 選擇要讀取的工作表
const sevensheetName = sevenworkbook.SheetNames[0]; // 讀取第一個工作表
const sevenworksheet = sevenworkbook.Sheets[sevensheetName];

// 將工作表轉換為 JSON 格式
const sevendata = xlsx.utils.sheet_to_json(sevenworksheet, { header: 1 });

const sevenarray = sevendata.slice(1).map(item => ({
    "商店": item[0],
    "品名": item[1],
    "價格": item[2],
    "熱量": item[3]
  }));
// 以上是小七的資料陣列------------------------------------------------------------------------------------------------------------------------------

console.log('小七的資料陣列: ', sevenarray);

// 以下是ok的資料陣列------------------------------------------------------------------------------------------------------------------------------

// 讀取 Excel 文件
const okfilePath = path.resolve('../product_data/OK_product.xlsx');
const okworkbook = xlsx.readFile(okfilePath);

// 選擇要讀取的工作表
const oksheetName = okworkbook.SheetNames[0]; // 讀取第一個工作表
const okworksheet = okworkbook.Sheets[oksheetName];

// 將工作表轉換為 JSON 格式
const okdata = xlsx.utils.sheet_to_json(okworksheet, { header: 1 });

const okarray = okdata.slice(1).map(item => ({
    "商店": item[0],
    "品名": item[1],
    "價格": item[2],
    "熱量": item[3]
  }));
// 以上是ok的資料陣列------------------------------------------------------------------------------------------------------------------------------

console.log('ok的資料陣列: ', okarray);