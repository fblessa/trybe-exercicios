import Swal from 'sweetalert2';

const picture = document.getElementById('picture');
const heroName = document.getElementById('hero-name');
const sortButton = document.getElementById('find-hero');
const API_ID = 'https://akabab.github.io/superhero-api/api';
const numberHeroes = 999;

const generateRandomNumber = () => Math.floor(Math.random() * numberHeroes);

sortButton.addEventListener('click', (event) => {
  event.preventDefault();
  picture.src = '';
  heroName.innerHTML = '';
  const id = generateRandomNumber();
  fetch(`${API_ID}/id/${id}.json`)
    .then((response) => response.json())
    .then((data) => {
      picture.src = data.images.md;
      heroName.innerHTML = data.name;
    })
    .catch((error) => {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Hero!',
        text: error.message,
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });
});

/*
    fetch(API_ID)
  .then((response) => response.json())
  .then((data) => {
    const name = data.name;
    const photo = data.images.md;
  });

  Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>'
})
*/
