//將二維陣列轉為物件，以便根據鍵值進行分類排序
function arrayToObjectArray(data) {
    const headers = data.shift();
    return data.map(row => {
        const obj = {};
        row.forEach((cell, index) => {
            obj[headers[index]] = cell;
        });
        return obj;
    });
}

module.exports = arrayToObjectArray;


