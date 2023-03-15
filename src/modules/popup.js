import getApiComments from "./api.js";

const displayPopup = (item, index) => {
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.innerHTML = `<div class="modal-content">
        <span id='close-btn' class="close close-btn">&times;</span>
        <div ><img class="pop-image" src=${item.url} alt=${item.breeds[0].name}></div>
        <div class="description">
          <h2 class="characters">Dog Characters</h2>
          <div class="text">
            <p>Name: <span>${item.breeds[0].name}</span></p>
            <p>Bred for: <span>${item.breeds[0].bred_for}</span></p>
            <p>Weight: <span>[${item.breeds[0].weight.metric}]</span></p>
            <p>Life span: <span>${item.breeds[0].life_span}</span></p>
            <p>Size: <span>[${item.breeds[0].height.metric}]</span></p>
            <p>Temperament: <span>${item.breeds[0].temperament}</span></p>
          </div>
          <div class="commentcontainer">
            <h3>Comments</h3>
            <ul id="listcoment" class="listcoment"></ul>
            </div>
          <div class="comment">
            <h4>Add a Comment</h4>
            <form action="https://formspree.io/f/mqkjggay" method="post" id="form">
              <label for="name"></label>
              <input type="text" id="name" name="name" maxlength="30" placeholder="Name" required/>
              <textarea type="text" id="text" maxlength="500" rows="8" cols="50" placeholder="Write your comment here" required></textarea>
              <button type="submit" class="add-comment">Comment</button>
            </form>
          </div>
        </div>
      </div>`;
  document.body.appendChild(modal);
  const commentsList = document.getElementById("listcoment");
  const comments = getApiComments(index);
  console.log(comments);

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", () => {
    modal.parentElement.removeChild(modal);
  });
};

export default displayPopup;
