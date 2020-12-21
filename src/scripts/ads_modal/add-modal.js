import addModalTempl from '../../templates/addModalTempl.hbs' ;

console.log(addModalTempl)


const mainSection =  document.querySelector('.main');


function buildAddModalTempl(){
    mainSection.insertAdjacentHTML('afterbegin', addModalTempl())
}

buildAddModalTempl()

