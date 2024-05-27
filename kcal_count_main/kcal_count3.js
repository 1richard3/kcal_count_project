var comm = JSON.parse(localStorage.getItem('comments')) || [];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const foodID = urlParams.get('foodID');
    displayFoodDetails(foodID);
    loadComments(foodID);

    document.getElementById('submitComment').addEventListener('click', () => {
        addComment(foodID);
    });

    document.getElementById('goBackButton').addEventListener('click', function() {
        history.back();
    });
});

function displayFoodDetails(foodID) {
    const food = foods.find(item => item.foodID === parseInt(foodID));
    if (food) {
        document.querySelector('.image-description').innerHTML = `
            <img src="${food.img}" class="product-image" alt="${food.name}">
            <p>【商品名稱】：${food.name}</p>
            <p>【價格】：${food.price} 元</p>
            <p>【便利商店】：${food.cs}</p>
            <p>【熱量】：${food.Kcal} kcal</p>
        `;
    }
}

function addComment(foodID) {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput === '') {
        alert('請輸入內容後再提交');
        return;
    }

    const comment = {
        foodID: parseInt(foodID),
        content: userInput
    };

    comm.push(comment);
    localStorage.setItem('comments', JSON.stringify(comm));

    displayComments(foodID);
    document.getElementById('user-input').value = '';
}

function loadComments(foodID) {
    displayComments(foodID);
}

function displayComments(foodID) {
    const commentsContainer = document.getElementById('comments-container');
    commentsContainer.innerHTML = ''; 

    const filteredComments = comm.filter(comment => comment.foodID === parseInt(foodID));

    
    filteredComments.forEach(comment => {
        const commentElement = document.createElement('p');
        commentElement.classList.add('comment');
        commentElement.textContent = comment.content;
        commentsContainer.appendChild(commentElement);
    });
}
