<<<<<<< HEAD

// 以下是全家的資料陣列------------------------------------------------------------------------------------------------------------------------------
const xlsx = require('xlsx');
const path = require('path');

// 讀取 Excel 文件
const familymartfilePath = path.resolve('C:/xampp/htdocs/kcal_count/familymart.xlsx');
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
const sevenfilePath = path.resolve('C:/xampp/htdocs/kcal_count/7-11.xlsx');
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
const okfilePath = path.resolve('C:/xampp/htdocs/kcal_count/ok.xlsx');
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
=======
function submitform(){
    document.getElementById("gender-option").submit();
}

>>>>>>> c5cbd87a80baf530bda0147d6fd3703ded8098a4
