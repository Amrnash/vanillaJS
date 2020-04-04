//get modal element
const modal = document.getElementById("simple-modal");
//get open mpdal button
const modalBtn = document.getElementById("modal-btn");
//get close button
const closeBtn = document.querySelector(".close-btn");

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
//listen for outside click
window.addEventListener("click", clickOutside);

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
