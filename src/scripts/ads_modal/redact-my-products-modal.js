import redactMyProductsModalTempl from '../../templates/redactMyProductsModalTempl.hbs' ;

// console.log(redactMyProductsModalTempl)


const mainSection =  document.querySelector('.main');


function buildRedactModalTempl(){
    mainSection.insertAdjacentHTML('afterbegin', redactMyProductsModalTempl())
}

buildRedactModalTempl()