import searchModalTempl from '../../templates/searchModalTempl.hbs';

const searchSection = document.querySelector('.header');


function buildSearchModalTempl() {
    searchSection.insertAdjacentHTML('afterbegin', searchModalTempl())
}

buildSearchModalTempl()



