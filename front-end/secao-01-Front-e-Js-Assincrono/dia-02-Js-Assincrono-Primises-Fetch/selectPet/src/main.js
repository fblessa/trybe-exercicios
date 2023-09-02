import './style.css';

const picture = document.getElementById('picture');
const dogBtn = document.getElementById('get-dog');
const catBtn = document.getElementById('get-cat');
const surpriseBtn = document.getElementById('get-surprise');
const dogNumbers = 50;
const getRandomNumber = () => Math.round(Math.random() * dogNumbers);

const getRandomDog = () => {
  picture.src = '';
  const id = getRandomNumber();
  fetch(`https://dog.ceo/api/breeds/image/random/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const [image] = data.message;
      picture.src = image;
    });
};

const getRandomCat = () => {
  picture.src = '';
  fetch('https://api.thecatapi.com/v1/images/search')
    .then((response) => response.json())
    .then((data) => {
      const image = data[0].url;
      picture.src = image;
    });
};

dogBtn.addEventListener('click', () => {
  getRandomDog();
});

catBtn.addEventListener('click', () => {
  getRandomCat();
});

surpriseBtn.addEventListener('click', () => {
  Promise.race([
    fetch('https://dog.ceo/api/breeds/image/random'),
    fetch('https://api.thecatapi.com/v1/images/search'),
  ])
    .then((response) => response.json())
    .then((data) => {
      const raceImage = data.message || data[0].url;
      picture.src = raceImage;
    });
});
