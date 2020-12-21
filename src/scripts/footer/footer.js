import templatesFooter from '../../templates/footer.hbs';

const footerMarcupContainer = document.querySelector('.footer');

function renderFooterMarcup() {
    const marcup = templatesFooter();
    footerMarcupContainer.insertAdjacentHTML('beforeend', marcup)
}

renderFooterMarcup();