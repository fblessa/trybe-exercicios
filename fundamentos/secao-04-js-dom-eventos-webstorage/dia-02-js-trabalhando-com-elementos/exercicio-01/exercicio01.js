const whereAreYou = document.getElementById('where-are-you');

const parent = whereAreYou.parentElement;
parent.style.color = 'red';

const firstChildOfChild = whereAreYou.firstElementChild;
firstChildOfChild.innerText = 'Adicionando texto ao first child of child';

const firstChild = parent.firstElementChild;

const childFirst = whereAreYou.previousElementSibling;

const attention = whereAreYou.nextSibling;

const thirdChild = whereAreYou.nextElementSibling;

const childThird = parent.lastElementChild.previousElementSibling;

