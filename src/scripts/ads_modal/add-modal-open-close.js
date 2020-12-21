// Реализует открытие модалки по кнопке "створити оголошення"


const refs = {
   addModalBackdropEl: document.querySelector('.add-modal__backdrop'),
   openAddModalButtonEl: document.querySelector('.info__content .btn'),
   closeAddModalButtonEl: document.querySelector('.add-modal__close-button'),
}


console.log(refs.openAddModalButtonEl);


refs.openAddModalButtonEl.addEventListener('click', openAddModalHandler);
refs.closeAddModalButtonEl.addEventListener('click', closeAddModalHandler);
refs.addModalBackdropEl.addEventListener('click', closeModalOnBackdropHandler);
document.addEventListener('keydown', escClose);

function openAddModalHandler(event){
    refs.addModalBackdropEl.classList.toggle('is-hidden');
}

function closeAddModalHandler(event){
    refs.addModalBackdropEl.classList.add('is-hidden');
}

function escClose(event){
    const keyCodeValue = event.keyCode;
     if(keyCodeValue === 27){
         refs.addModalBackdropEl.classList.add('is-hidden')
     }
      
}

function closeModalOnBackdropHandler(event) {
    const clisckValue = event.target;

    if (clisckValue === refs.addModalBackdropEl) {
        refs.addModalBackdropEl.classList.add('is-hidden');
        
    } else {
        return
    }
}