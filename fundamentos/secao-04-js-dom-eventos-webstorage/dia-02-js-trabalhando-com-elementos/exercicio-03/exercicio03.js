//Remova a tag h2, filha do elemento where-are-you.
let whereAreYou = document.getElementById('where-are-you');
let element = whereAreYou.firstElementChild;
whereAreYou.removeChild(element);
//solução da trybe
/* const parent = document.getElementById('parent');
const allChildren = parent.childNodes;
for (let index = allChildren.length - 1; index >= 0; index -= 1) {
  const currentChild = allChildren[index];
  if (currentChild.id === 'where-are-you') { // verifica se o id do filho atual é igual a 'where-are-you'
    currentChild.removeChild(currentChild.firstElementChild); // remove o primeiro elemento do filho atual, no caso a tag <h2>
  }
} */