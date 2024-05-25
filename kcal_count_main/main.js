// 主腳本，在此進行函式腳本的調用
const readExcel = require('./functions/readExcel');
const sortByKey = require('./functions/sortByKey');

const filePath1 = '../product_data/711_product.xlsx';
const filePath2 = '../product_data/OK_product.xlsx';

const objectData1 = readExcel(filePath1);
const objectData2 = readExcel(filePath2);

// 函式調用測試，網頁上線後須註解掉
const sortedByPriceAsc = sortByKey(objectData1, '價格', true);
console.log("Sorted by Price Ascending:");
console.log(sortedByPriceAsc);

const sortedByCaloriesDesc = sortByKey(objectData1, '熱量(大卡)', false);
console.log("Sorted by Calories Descending:");
console.log(sortedByCaloriesDesc);
