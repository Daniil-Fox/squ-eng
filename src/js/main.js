import './_components.js';
import intlTelInput from 'intl-tel-input';
import { validateForms } from './functions/validate-forms.js';

const input = document.querySelector("#phone");

const iti = intlTelInput(input, {
  initialCountry: "ru",
  separateDialCode: true,
});

const handleChange = () => {
  let text;
  let className = 'valid';
  let startCode = document.querySelector('.iti__selected-dial-code').textContent

  if (input.value) {
    className = iti.isValidNumber()
      ? "valid"
      : "invalid";
  }
  input.classList.add(className)
  console.log(startCode + input.value)
};

const telInput = document.querySelectorAll(".input-tel");
telInput.forEach(el => {
  intlTelInput(el, {
    initialCountry: "ru",
    separateDialCode: true,
  });

  el.addEventListener('change', handleChange);
  el.addEventListener('keyup', handleChange);
})




input.addEventListener('change', handleChange);
input.addEventListener('keyup', handleChange);




const rules1 = [
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];
const rules2 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'minLength',
        value: 3,
      },
      {
        rule: 'maxLength',
        value: 15,
      },
    ]
  },
  {
    ruleSelector: '.input-email',
    rules: [
      {
        rule: 'required',
      },
      {
        rule: 'email',
      },
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните телефон!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.quiz__slider', rules1, [], afterForm);
validateForms('.modal__form', rules2, [], afterForm);




const modal = document.querySelector('.modal')

if(modal){
  const modalButtons = document.querySelectorAll('.modal-btn')
  const modalBody = modal.querySelector('.modal__body')

  modalBody.addEventListener('click', e => e.stopPropagation())

  modalButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault()

      modal.classList.add('active')
    })
  })

  modal.addEventListener('click', e => {
    modal.classList.remove('active')
  })
}



const menuBtn = document.querySelector('.header__burger')
const menu = document.querySelector('.menu')
const menuItems = menu.querySelectorAll('.menu-nav__link')

const headerContacts = document.querySelector('.header__contacts')
menuBtn.addEventListener('click', e => {
  e.preventDefault()
  let isActive = menu.classList.toggle('active')
  menuBtn.classList.toggle('active')

  if(isActive){
    document.body.style.overflow = 'hidden'
    headerContacts.style.display = 'none'
  } else {
    document.body.style.overflow = null
    setTimeout(() => {
      headerContacts.style.display = null
    }, 250)
  }
})

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    menuItems.forEach(el => el.classList.remove('active'))
    item.classList.add('active')
  })
})
