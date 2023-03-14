const popupButton = document.getElementById("popup-button");
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popup-content");
const closeButton = document.getElementById("close-button");

popupButton.addEventListener("click", () => {
  popup.style.display = "block";
  
  // popupContent.innerHTML = "";
});

closeButton.addEventListener("click", () => {
  popup.style.display = "none";
});

const displayItems = (itemslist) => {
  const itemsContainer = document.getElementById("items");
  itemslist.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "item";
    itemElement.setAttribute("data-index", index);
    itemElement.innerHTML = `<img class="item-img" src=${item.url} alt=${item.breeds[0].name} /> <div><p>${item.breeds[0].name}</p><div><img class="like-icon" src=${likeSrc} alt="like" /> <p> <span>0</span> likes </p></div> </div><button class="item-button">View Details</button>`;
    itemsContainer.appendChild(itemElement);

    const itemButton = itemElement.querySelector(".item-button");
    itemButton.addEventListener("click", () => {
      popup.style.display = "block";
      popupContent.innerHTML = `
        <img class="item-img" src=${item.url} alt=${item.breeds[0].name} />
        <h2>${item.breeds[0].name}</h2>
        <p>Breed: ${item.breeds[0].name}</p>
        <p>Age: ${item.age}</p>
        <p>Color: ${item.color}</p>
      `;
    });
  });
};


