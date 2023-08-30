import { nanoid } from 'nanoid';
import './style.css';
import copy from 'clipboard-copy';

const passwordBtn = document.querySelector('button');
const displayPassword = document.querySelector('h2');

passwordBtn.addEventListener('click', () => {
  const randomPassword = nanoid();
  displayPassword.innerHTML = randomPassword;
  // copy(randomPassword);
});

displayPassword.addEventListener('click', (event) => {
  copy(event.target.innerHTML);
});
