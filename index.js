const btnShowModal = document.querySelector(".show-modal");
const backDrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const btnConfirmModal = document.querySelector(".confirm-modal");

btnShowModal.addEventListener("click", (e) => {
  backDrop.style.display = "block";
  modal.style.opacity = "1";
  modal.style.transform = "translateY(20vh)";
});
function closeModal() {
  backDrop.style.display = "none";
  modal.style.opacity = "0";
  modal.style.transform = "translateY(-100vh)";
}
btnCloseModal.addEventListener("click", closeModal);

backDrop.addEventListener("click", closeModal);

btnConfirmModal.addEventListener("click", () => {
  closeModal();
  alert("confirm");
});
