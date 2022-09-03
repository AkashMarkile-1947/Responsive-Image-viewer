/* Modal*/
const modal = document.querySelector("#modal-container");
//getting all images in gallery
let images  = document.querySelectorAll(".image")
// Modal image container
const modalImg = document.querySelector("#modal-image")
//caption (photographer-social-id)
let caption = document.querySelector(".content-caption");
//modal popup with image and caption
images.forEach( item => {

    item.addEventListener("click", function() { 

    modal.style.display = "block";
    modalImg.src =  this.src;
    caption.innerHTML = this.alt;
});
});
//closing modal
var closeBtn = document.getElementsByClassName("close-btn")[0];

closeBtn.onclick = function() {
    modal.style.display = "none";
  }