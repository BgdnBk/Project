import templatesCadrGallery from '../../templates/cardGallery.hbs';
import templatesCategory from '../../templates/category.hbs';
import { addSlider } from './slider.js';
import { BASE_URL } from '../constans/index.js'
// import { Object } from 'core-js';
// const cardGallery = document.querySelector('.gallery');
const cardCategoryMarkup = document.querySelector('.gallery-markup');
const translationCategory = {
        sales: 'Розпродаж',
        property: 'Нерухомість',
        transport: 'Транспорт',
        work: 'Робота',
        electronics: 'Електроніка',
        businessAndServices: 'Бізнес та послуги',
        recreationAndSport: 'Відпочинок та спорт',
        free: 'Віддам безкоштовно',
        trade: 'Обмін',
}

const radioBtnFirst = document.querySelector("#radio-1");
const radioBtnValue = radioBtnFirst.value;
const pagContainer = document.querySelector('.active-radio-btn');
pagContainer.addEventListener('click', radioBtnChoice);
cardCategoryMarkup.addEventListener('click', showAllGoodsCategory)

/*=========Функция загрузки данных выбранной категории=========*/
function getDataCategory(category) { 
  fetch(`${BASE_URL}/call/specific/${category}`)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        renderCardFullCategory(result);
      })
    .catch(error => console.log('error', error));
};

/*=========Функция call-back для клика на "Дивитись усі"=========*/
function showAllGoodsCategory(event) { 
  console.log(event.target.dataset.filter);
  if (event.target.dataset.filter != undefined) {
  getDataCategory(event.target.dataset.filter);  
  }
}


/*=========Функция первой загрузки страницы сайта=========*/
function firstLoad() { 
  fetchCategories(radioBtnValue);
  pagContainer.classList.add('form_radio_group');
  pagContainer.classList.remove('active-radio-btn');
};

/*=========Функция обработки выбора конкретного радиобатона=========*/
function radioBtnChoice(evt) { 
  console.log(evt.target.value);

  if (evt.target.checked) { 
    clearGallery();
    fetchCategories(evt.target.value);
  }
}

/*=========Функция очистки галереи=========*/
function clearGallery() { 
  cardCategoryMarkup.innerHTML = '';
}

/*=========Функция рендеринга карточки товара=========*/
function renderCard(categories) { 
  for (let card in categories) { 
    console.log('this is card', card);
    let gellary = document.querySelector('[data-category="'+card+'"]');
    gellary.insertAdjacentHTML('beforeend', templatesCadrGallery(categories[card]))
     console.log('this is card', categories[card]);
  }
  const cardGallery = document.querySelectorAll('.gallery');
      cardGallery.forEach(item => { 
        addSlider(item);       
      });
  // let startSlider = async (arr) => { 
  //   arr.forEach(async (item) => {
  //     await addSlider(item);
  //   }); 
    // startSlider(cardGallery)
  // }
  // async function startSlider(arr) {
  //   arr.forEach(async (item) => {
  //     await addSlider(item);
  //   });    
  //   startSlider(cardGallery);
  // }  
  // const cardGallery = document.querySelectorAll('.gallery')    
}

/*=========Функция рендеринга всех товаров данной категории=========*/
function renderCardFullCategory(gallery) {
  clearGallery();
  cardCategoryMarkup.insertAdjacentHTML('beforeend', templatesCadrGallery(gallery));
}

/*=========Функция запроса на АПИ на категории=========*/
function fetchCategories(pageNum) { 
  fetch(`${BASE_URL}/call/?page=${pageNum}`)    
    .then(r => r.json())
    .then(categories => {
      let items = Object.keys(categories).map(item => {
        return {
          category: item,
          title: translationCategory[item]
        }
      })
      let arrCategories = templatesCategory(items);
      cardCategoryMarkup.insertAdjacentHTML('afterbegin', arrCategories);
      console.log('this is numPage', pageNum);
      console.log('this is categories', categories);
      renderCard(categories);
      // renderPaginationBtns();
    });
}

// const cardGallery = document.querySelectorAll('.gallery')

//   async function processArray(arr) {
//   for (const item of arr) {
//     await addSlider(item);
//   } 
// }
// processArray(cardGallery)


firstLoad();





