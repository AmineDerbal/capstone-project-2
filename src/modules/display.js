import likeSrc from '../image/like-icon.png';

const displayItems = (itemslist) => {
  const itemsContainer = document.getElementById('items');
  itemslist.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'item';
    itemElement.setAttribute('data-index', index);
    itemElement.innerHTML = `<img class="item-img" src=${item.url} alt=${item.breeds[0].name} /> <div class="item-description"><p>${item.breeds[0].name}</p><div><img class="like-icon" src=${likeSrc} alt="like" /> <p> <span>0</span> likes </p></div> </div><button class="comment-button">comment</button>`;
    itemsContainer.appendChild(itemElement);
  });
};

export default displayItems;
