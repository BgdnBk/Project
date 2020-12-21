import AuthModalTmpl from '../../templates/authorization.hbs';
import FetchRegistration from './fetchRegForm';
import FetchLogIn from './fetchLogInForm';

import getRefs from './refsAuth';
// const refs = getRefs();
const refs = {
    
 openModalBtn: document.querySelector('.login__btn'),
        authModalEl: document.querySelector('.auth-modal'),
        authFormContainer: document.querySelector('.authorization'),
        registerBtn: document.querySelector('.js-register'),
        regBtn: document.querySelector('.js-register'),
}
// renderAuthModal()

// makeMarkup()
refs.openModalBtn.addEventListener("click", renderAuthModal);

function renderAuthModal(form) {
    // authFormContainer.classList.remove('is-hidden')
    const markup = AuthModalTmpl(form)
    makeMarkup(markup);
    document.querySelector('.auth-modal-close-button').addEventListener("click", closeAuthModal);
}
    function makeMarkup(html) {
        refs.authFormContainer.insertAdjacentHTML('afterbegin', html);
        refs.authFormContainer.addEventListener('click', sendFormData);

        function sendFormData(event) {
            if(event.target.classList.contains("js-register")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchRegistration = new FetchRegistration({ email, password });
                    fetchRegistration.addNewUser();
            } else if(event.target.classList.contains("js-login")) {
                event.preventDefault();
                let email = document.querySelector('.js-reg-email').value;
                let password = document.querySelector('.js-reg-password').value;

                const fetchLogIn = new FetchLogIn({ email, password });
                fetchLogIn.getCurrentUserData();
            }
        }
}
export default function closeAuthModal(event) {
    event.preventDefault();
    refs.authFormContainer.innerHTML =' ';
}
// renderAuthModal()