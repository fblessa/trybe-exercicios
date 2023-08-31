import validator from 'validator';
import './style.css';

const input = document.getElementById('input-date');
const select = document.getElementById('selection');
const validateBtn = document.getElementById('validation');
const paragraph = document.getElementById('paragraph');

const isEmail = () => {
  const result = validator.isEmail(input.value);
  paragraph.innerHTML = `A validação retornou ${result}`;
};

const isTaxId = () => {
  const result = validator.isTaxID(input.value, 'pt-BR');
  paragraph.innerHTML = `A validação retornou ${result}`;
};

const isUrl = () => {
  const result = validator.isURL(input.value);
  paragraph.innerHTML = `A validação retornou ${result}`;
};

const isLower = () => {
  const result = validator.isLowercase(input.value);
  paragraph.innerHTML = `A validação retornou ${result}`;
};

const isHexColor = () => {
  const result = validator.isHexColor(input.value);
  paragraph.innerHTML = `A validação retornou ${result}`;
};

validateBtn.addEventListener('click', (event) => {
  event.preventDefault();

  if (select.value === 'Email') {
    isEmail();
  }

  if (select.value === 'CPF') {
    isTaxId();
  }

  if (select.value === 'Url') {
    isUrl();
  }

  if (select.value === 'Lower') {
    isLower();
  }

  if (select.value === 'Hex') {
    isHexColor();
  }
});
