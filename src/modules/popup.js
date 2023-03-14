const displayPopup = (item) => {
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.innerHTML = `<div class="modal-content">
        <span id='close-btn' class="close close-btn">&times;</span>
        <div ><img class="pop-image" src=${item.url} alt=${item.breeds[0].name}></div>
        <div class="description">
          <h2 class="characters">Dog Characters</h2>
          <div class="text">
            <p>Name: <span>Talia</span></p>
            <p>Breed: <span>African giant</span></p>
            <p>Weight: <span>15kg</span></p>
            <p>Age: <span>12yrs</span></p>
            <p>Size: <span>12-30cm</span></p>
            <p>Temperament: <span>Stong</span></p>
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
  // modal.classList.remove("close");
  // document.body.classList.add("hidescrollbar");
  // modal.addEventListener("click", (e) => {
  //   if (e.target.parentElement.classList.contains("close-btn")) {
  //     modal.classList.add("close");
  //     modal.innerHTML = "";
  //     document.body.classList.remove("hidescrollbar");
  //   }
  // });
  
  const modalContent = document.querySelector(".modal-content");
  const closeButton = document.querySelector(".close");
  const openButton = document.querySelector("#open-button");

  openButton.addEventListener("click", () => {
    modal.style.display = "block";
  });

  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modalContent) {
      modal.style.display = "none";
    }
  });

}

export default displayPopup;