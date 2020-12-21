"use strict"

const redactForm = document.querySelector('#redact-form');
const validateBtn = redactForm.querySelector('.redact__save-button');
const nameProduct = redactForm.querySelector('.redact-name-input');
const descriptionProduct = redactForm.querySelector('#redact-product-description');
const selectProduct = redactForm.querySelector('#redact-product-category');
const productPrice = redactForm.querySelector('#redact-product-price');
const tel = redactForm.querySelector('#redact-tel-number');
const requiredFields = redactForm.querySelectorAll('.req');


// Регулярные выражения для ввода корректных данных

const regTel =  /((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))/;
const regPrice = /\d+\.\d{2}\D{3}/;



redactForm.addEventListener('submit', sendRedaction);

function sendRedaction(event){
    event.preventDefault();

    removeValidation();

    checkFieldsPresence();

    checkTelValue();

    checkPriceValue();
   
}




function generetateError(text){
    const error = document.createElement('div');
    error.className = 'redact-modal-error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;

}

function removeValidation(){
    const errors = redactForm.querySelectorAll('.redact-modal-error');
    for (let i = 0; i < errors.length; i+=1) {
        errors[i].remove();
        
    }

}




function checkFieldsPresence(){
    for (let i = 0; i < requiredFields.length; i+=1) {
        if(!requiredFields[i].value){
            console.log('Обязательно должно быть заполнено', requiredFields[i]);

            const error = generetateError('поле обов&#39язково до заповнення')
           
            redactForm[i].parentElement.insertBefore(error, requiredFields[i]);
        }
        
    }

    
}

function checkTelValue(){
    if(tel.value !== ""){
        if(!regTel.test(tel.value)){
            console.log('ne pravilno');
            const error = generetateError('неправильно введений номер')
            // const error = generetateError('неправильно введений номер');
            tel.parentElement.insertBefore(error, tel);
        }
    }
   
}

function checkPriceValue(){
    if(productPrice.value !== ""){
        if(!regPrice.test(productPrice.value)){
            const error = generetateError('введіть ціну згідно формату 0.00грн')
            productPrice.parentElement.insertBefore(error, productPrice);
        }
    }
}