import header from '../../templates/header.hbs';



const headerList = document.querySelector('.header');

function buildHeaderTpl() {
    headerList.insertAdjacentHTML('afterbegin', header())
}

buildHeaderTpl();