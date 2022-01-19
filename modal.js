'use strict';

//Modal body
const modal = document.querySelector('.modal');

//Background when modal appears
const overlay = document.querySelector('.overlay');

//X button to close modal window
const btnCloseModal = document.querySelector('.close-modal');

//Buttons to open modal window
const btnsOpenModal = document.querySelectorAll('.modal-button');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

//Add all buttons the event 'openModal' when it's clicked
for (let modalButton of btnsOpenModal) {
  modalButton.addEventListener('click', openModal);
}

//Add closeModal event when  X button is clicked
btnCloseModal.addEventListener('click', closeModal);

//Add closeModal event when background is clicked
overlay.addEventListener('click', closeModal);

//When Escape button is clicked and modal isn't hidden, close modal
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closeModal();
});
