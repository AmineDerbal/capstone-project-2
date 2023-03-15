import { getApiComments } from './api.js';

const appendComment = (commentItem) => {
  const list = document.createElement('li');
  list.innerHTML = `<span class ="date">${commentItem.creation_date} </span> <span class="name">${commentItem.username} </span> <span class="comment">${commentItem.comment}</span>`;
  return list;
};

const displayPopup = async (item, index) => {
const displayPopup = (item) => {
  const modal = document.createElement('div');
  modal.id = 'modal';
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
          <div class="d-comment">
            <h4>Add a d-comment</h4>
            <form id="form">
              <label for="name"></label>
              <input type="text" id="name" name="name" maxlength="30" placeholder="Name" required/>
              <textarea type="text" id="text" maxlength="500" rows="8" cols="50" placeholder="Write your comment here" required></textarea>
              <button type="submit" class="add-comment">Comment</button>
            </form>
          </div>
        </div>
      </div>`;
  document.body.appendChild(modal);
  const commentsList = document.getElementById('listcoment');
  const comments = await getApiComments(index);
  if (comments.length !== 0) {
    comments.forEach((comment) => {
      commentsList.appendChild(appendComment(comment));
    });
  }

  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.parentElement.removeChild(modal);
  });
};

export default displayPopup;
