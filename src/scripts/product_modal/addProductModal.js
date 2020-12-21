import productModal from '../../templates/productModal.hbs';

const modalProductContainer = document.querySelector("main");

// function modalAppend() {
//     modalProductContainer.insertAdjacentHTML('afterbegin', productModal())
     
// }
// modalAppend()
/* const openModalProduct = document.querySelector('.slide'); */

let backdropMod;
let infoAboutSaller;
let infoAboutSallerCover;

function prepareModal() {
    /* let openModalProduct = document.getElementById("myBtn"); */
    let closeModal = document.querySelector('#close_modal_product');
    backdropMod = document.querySelector('.backdropProduct');

    /* показывает инфо о продавце */
    infoAboutSaller = document.querySelector('.dealler_infornation_down');
    infoAboutSallerCover = document.querySelector('.dealler_infornation');

    infoAboutSallerCover.addEventListener('click', showInfoAboutsaller);

    closeModal.addEventListener('click', closeModalProduct);
    /* openModalProduct.addEventListener('click', openModalFunc); */
    backdropMod.addEventListener('click', closeModalOnBackdropProduct) ;
}


function showInfoAboutsaller() {
    infoAboutSallerCover.style.opacity = '0';
    infoAboutSaller.style.opacity = '1';
}


export default function openModalFunc(card) {
    
    modalProductContainer.insertAdjacentHTML('afterbegin', productModal(card))

    prepareModal();

    backdropMod.classList.remove('is-hidden');
    window.addEventListener('keydown', onEscKeydown);
    console.log(card);

}

function closeModalProduct(e) {
       
    backdropMod.remove();
    
}

function closeModalOnBackdropProduct(event) {

    if (event.target === backdropMod) {
        backdropMod.classList.add('is-hidden');
        
    }
}

function onEscKeydown(event) {
    if (event.code === 'Escape') {
       closeModalProduct()
    }
}