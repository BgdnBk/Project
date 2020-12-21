/*const routers = [
    
    {
        path: '/',    
        // component: fun1,
        meta: { auth: false}
    },
    {
        path: '/page2',    
        // component: fun2,
        meta: { auth: false}
    },
    {
        path: '/page3',   
        // component: fun3,
        meta: { auth: false}
    },
    {
        path: '/recreation and sport',   
        meta: { auth: false}
    },
    {
        path: '/free',   
        meta: { auth: false}
    },
    {
        path: '/business and services',   
        meta: { auth: false}
    },
    {
        path: '/electronics',   
        meta: { auth: false}
    },
    {
        path: '/trade ',   
        meta: { auth: false}
    },
    {
        path: '/transport',   
        meta: { auth: false}
    },
    {
        path: '/work',   
        meta: { auth: false}
    },
    {
        path: '/property',   
        meta: { auth: false}
    },
    {
        path: '/sales',   
        meta: { auth: false}
    },

];

let auth = true;
let startState = true;


//let divPagination = document.querySelector('контейнер пагинации');
//const listPagination = document.querySelector('список пагинации')
const clearBtn = document.querySelector('.filter')
//const clearOfficeBtn = document.querySelector('.filter_office')
const showCategories = document.querySelector('.category')

function filterPage(event) {
    event.preventDefault();
    const getHref = event.target.getAttribute('href')
    if (event.target.tagName !== "A") return
    if (getHref !== '/'
        && getHref !== '/page2'
        && getHref !== '/page3') {
        
        showCategories.classList.remove('is_hiden')
    }
    
    showHistory(event);    
    
}
function showClearBtn(event) {
    event.preventDefault();
    if (event.target.tagName !== "A") return
    
    showCategories.classList.add('is_hiden')
    showHistory2(event);    
    
}
function showClearOfficeBtn(event) {
    event.preventDefault();
    if (event.target.tagName !== "BUTTON") return
    showCategories.classList.add('is_hiden')
    showHistory2(event);    
    
}
function showHistory2(event) {
    const query = '/';
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}
function showHistory(event) {
    const query = event.target.getAttribute('href');
    let router = routers.find( item => item.path === query);
    if (!router) return
    if (!router.meta.auth || !auth) history.pushState(query, null, query)
}


divPagination.addEventListener('click', filterPage);
listPagination.addEventListener('click', filterPage);
clearBtn.addEventListener('click', showClearBtn);
clearOfficeBtn.addEventListener('click', showClearOfficeBtn); */