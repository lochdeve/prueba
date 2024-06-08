import { validateAttempts, validateInput } from './utils/index.js';

// Constants
const input = document.querySelector('.pinpad__lcd-input');
const buttons = document.querySelectorAll('.pinpad__button');
const saveButton = document.querySelector('.pinpad__button--save');
const pinpadLcd = document.querySelector('.pinpad__lcd');
const eye = document.querySelector('.pinpad__lcd-image');
const modal = document.querySelector('.bg-modal');
const modalContent = document.getElementById('modal__content');
const modalTitle = document.getElementById('modal__title');
const dialog = document.querySelector('.dialog');
const dialogContent = document.querySelector('.dialog__attempts');

let password = ''
let attempts = 3;
const resetStyle = () => {
  eye.style.display = 'block';
  input.style.fontSize = '65px';
  pinpadLcd.style.backgroundColor ='#e5f3f2';
  input.style.textAlign = 'right';
  input.value = '';
}

// listener for close the modal
document.querySelector('.modal__exit__btn').addEventListener('click', function() {
  modal.style.display = 'none';
  resetStyle()
});

document.addEventListener('DOMContentLoaded', () => {
  // active in the input password mode
  eye.addEventListener('click', () => {
    if (input.type === 'password') {
      input.type = 'text';
      eye.src = './assets/eye.png';
    } else {
      input.type = 'password';
      eye.src = './assets/eye-close.png';
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const number = button.getAttribute('data-number');
        if (input.value === 'CORRECT' || input.value === 'WRONG' || input.value === 'SAVED' || input.value === 'NOT A NUMBER') {
          resetStyle()
        }
        if (number === 'C') {
          resetStyle()
          return;
        } else if (number){ 
          input.value += number;
        }
      });
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    
  
    saveButton.addEventListener('click', () => {
      if (password) {
        if (password === input.value) {
          input.value = 'CORRECT';
          input.style.textAlign = 'center';
          eye.style.display = 'none';
          pinpadLcd.style.backgroundColor = '#DFF5DA';
          window.location.replace('https://www.codebay-innovation.com/'); 
        } else {
          validateAttempts(attempts)
          input.value = 'WRONG';
          input.style.textAlign = 'center';
          eye.style.display = 'none';
          pinpadLcd.style.backgroundColor = '#FFE4E4';
          dialog.style.display='block';
          dialogContent.innerHTML = attempts;
          attempts= attempts - 1;
        }
      }else if (validateInput(input)) {
        password = input.value;
        input.value = 'SAVED';
        input.style.textAlign = 'center';
        eye.style.display = 'none';
        pinpadLcd.style.backgroundColor = '#DFF5DA';
        modal.style.display = 'flex';
        modalTitle.innerHTML = 'Introduce tu codigo';
        modalContent.innerHTML = 'Introduce el numero de 6 digitos para continuar (tienes 3 intentos).';
      } else {
        input.value = 'NOT A NUMBER';
        eye.style.display = 'none';
        input.style.textAlign = 'center';
        pinpadLcd.style.backgroundColor = '#FFE4E4';
        input.style.fontSize = '50px';
      }
    });
  });
