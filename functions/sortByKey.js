// 根據商品的鍵值進行分類，True為升序
function sortByKey(array, key, ascending = true) {
    return array.sort((a, b) => {
        if (ascending) {
            return a[key] - b[key];
        } else {
            return b[key] - a[key];
        }
    });
}

module.exports = sortByKey