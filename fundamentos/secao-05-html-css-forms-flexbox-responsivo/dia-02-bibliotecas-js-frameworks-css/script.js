const validate = new window.JustValidate(
  '#main-form',
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
  },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
  },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
  },
},
);

validate
  .addField('#fullName', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'O mínimo de caracteres é 8',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O máximo de caracteres é 60',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O Campo de Email é obrigatório',
    },
    {
      rule: 'email',
      errorMessage: 'Digite um Email Valido',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O máximo de caracteres é 40',
    },
  ])
  .addField('#question', [
    {
      rule: 'required',
      errorMessage: 'O Campo de resposta é Obrigatório',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
    {
      rule: 'minLength',
      value: 20,
      errorMessage: 'O mínimo de caracteres é 20',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

  window.onload = () => {
    const submitBtn = document.querySelector('#submit-btn')
    const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', () => {
      submitBtn.disabled = true;
    })
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', () => {
      submitBtn.disabled = !agreement.checked;
    })
  }