let translationOfWords = {
        property:'Недвижимость',
        transport:'Транспорт',
        work:'Работа',
        electronics:'Электроника',
        'business and services':'Бизнес и услуги',
        'recreation and sport':'Отдых и спорт',
        free:'Бесплатно',
        trade:'Торговля'
};

let BASE_URL = 'https://callboard-backend.herokuapp.com';

let getCategory = ( category ) => {
  
    fetch(`${BASE_URL}/call/specific/${category}`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}

let getCategories = async () => {
    return await fetch(`${BASE_URL}/call/categories`)
      .then(response => response.json())
      .then(result => result)
      .catch(error => console.log('error', error))
}

let menuRef = document.querySelector('.menu__links');
let menuMobile = document.querySelector('.menu__links-office');

let addMarkup = ( categories ) => {
    let markup = categories.map( category => `<a href="#" data-category="${category}" class="header__link"${category}">${translationOfWords[category]}</a>`)
  menuRef.innerHTML = markup.join(' ')
  menuMobile.innerHTML = markup.join(' ')
}

menuRef.addEventListener('click', (e) => {
    e.preventDefault();
    let category = e.target.getAttribute('data-category');
    getCategory ( category );
})

menuMobile.addEventListener('click', (e) => {
    e.preventDefault();
    let category = e.target.getAttribute('data-category');
    getCategory ( category );
})


let start = async () => {
  let categories = await getCategories();
  addMarkup ( categories )
}

start();