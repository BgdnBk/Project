const backdrop = document.querySelector('.search-modal-backdrop');
const openSearchModalBtn = document.querySelector('#search-btn');
const closeSearchModalBtn = document.querySelector('#close-search-modal-button');

openSearchModalBtn.addEventListener('click', openSearchModal);
closeSearchModalBtn.addEventListener("click", closeSearchModal);
document.addEventListener('keydown', escClose);
backdrop.addEventListener('click', closeModalOnBackdrop);

function openSearchModal(evt) {
    evt.preventDefault()
    backdrop.classList.remove('is-hidden')
}
   
function closeSearchModal(evt) { 
    evt.preventDefault()
    backdrop.classList.add('is-hidden')
}
    
function escClose(evt){
    const keyCodeValue = evt.keyCode;
     if(keyCodeValue === 27){
          backdrop.classList.add('is-hidden')
     }
}

function closeModalOnBackdrop(evt) {
    const clisckValue = evt.target;

    if (clisckValue === backdrop) {
        backdrop.classList.add('is-hidden');        
    } else {
        return
    }
}
    

