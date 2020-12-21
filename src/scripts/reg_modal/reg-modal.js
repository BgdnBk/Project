// const openModalBtn = document.querySelector('.login__btn')
// const openUserProfile = document.querySelector('.user__profile-header')
// const modalEl = document.querySelector('.js-lightbox')
// const closeModalBtn = document.querySelector('.close-reg-button')
// const regModalRef = document.querySelector('.lightbox__content')
// const entryBtnRef = document.querySelector('.entry-btn')
// const emailInput = document.querySelector('.email-input')
// // const passwordInputRef = document.querySelector('.password-input')
// const googleAuthRef = document.querySelector('.google-auth')

// openModalBtn.addEventListener('click', openModal)
// openUserProfile.addEventListener('click', openModal)
// closeModalBtn.addEventListener('click', closeModal)
// entryBtnRef.addEventListener('click', validate)
// googleAuthRef.addEventListener('click', onsingIn)

function openModal(evt) {
  
  evt.preventDefault()
  modalEl.classList.add('is-open')
  init()
}

function closeModal() {
  modalEl.classList.remove('is-open')  
}


// валидация имейла(просто но со вкусом))
function validate(evt) {
    evt.preventDefault()
   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   if(reg.test(emailInput) == false) {
      alert('Введите корректный e-mail');
      return false;
   }
}

function init() {
  window.gapi.load('auth2', function() {
  /* Ready. Make a call to gapi.auth2.init or some other API */
window.gapi.auth2.init(     {
  client_id: '5864336264-o510c8i2ftpn9mi614gmohkspbkn0vpg.apps.googleusercontent.com'
}).then(() => console.log('init OK'), () => console.log('init ERROR'))

 
  });
}

function onsingIn() {
  const GoogleAuth = window.gapi.auth2.getAuthInstance()
  GoogleAuth.signIn(
  {
  scope: 'profile email'
}
  ).then(user => console.log('auth OK', user.getBasicProfile().getEmail()), () => console.log('auth ERROR'))
  
}

function onSignOut() {
  const GoogleAuth = window.gapi.auth2.getAuthInstance()
  GoogleAuth.signOut()
}

// что мы можем получить от юзера
// gapi.auth2.BasicProfile
// You can retrieve the properties of gapi.auth2.BasicProfile with the following methods:
// BasicProfile.getId()
// BasicProfile.getName()
// BasicProfile.getGivenName()
// BasicProfile.getFamilyName()
// BasicProfile.getImageUrl()
// BasicProfile.getEmail() */