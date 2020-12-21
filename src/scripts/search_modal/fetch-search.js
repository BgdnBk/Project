const BASE_URL = 'https://callboard-backend.herokuapp.com';

function fetchSearch(searchQuery) {
    return fetch(`${BASE_URL}/call/find?search=${searchQuery}`)
    .then(response => response.json())
    .then(result => result.searhResult)
    .catch(error => console.log('error', error));
}

export default fetchSearch;