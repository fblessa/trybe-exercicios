const inputText = document.querySelector("#input-text");
const inputCheckbox = document.querySelector("#input-checkbox");
const hrefLink = document.querySelector("#href");

// Requisito 1
hrefLink.addEventListener('click', (event) => {
  event.preventDefault();
})

// Requisito 2
inputCheckbox.addEventListener('click', (event) => {
  event.preventDefault();
})

// Requisito 3
inputText.addEventListener('keypress', (event) => {
  if (event.key !== 'a') {
    event.preventDefault();
  }
})