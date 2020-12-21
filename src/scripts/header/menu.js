const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal_menu');
const openModalButton = document.querySelector('.menu-button');
const closeModalButton = document.querySelector('.close-button');

openModalButton.addEventListener('click', onModalMenu);
closeModalButton.addEventListener('click', closeModalMenu);

function onModalMenu(event) {
    window.addEventListener('keydown', onEscKeydown);
    event.preventDefault()
    backdrop.classList.remove('is-hidden') 
}

function closeModalMenu(event) {
    event.preventDefault()
    backdrop.classList.add('is-hidden')
}
  
function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalMenu()
    }
}