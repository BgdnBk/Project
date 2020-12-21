import searchResultTmpl from '../../templates/search-result.hbs';

const searchContainer = document.querySelector('#js-search-result');

function updateSearchMarckup(searchResult) {
    const marckup = searchResultTmpl(searchResult);
    searchContainer.insertAdjacentHTML('beforeend', marckup);    
}

export default updateSearchMarckup;