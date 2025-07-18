const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const btnOpenModal = $(".open-modal");
const modalOverlay = $(".modal-overlay");

btnOpenModal.onclick = function() {
   modalOverlay.classList.add("show");
}