// 讀取xlsx檔，將資料表作為陣列存取
const XLSX = require('xlsx');
const arrayToObjectArray = require('./arrayToObjectArray');

function readExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    const data = XLSX.utils.sheet_to_json(worksheet, {header:1});
    return arrayToObjectArray(data);
}

module.exports = readExcel;
