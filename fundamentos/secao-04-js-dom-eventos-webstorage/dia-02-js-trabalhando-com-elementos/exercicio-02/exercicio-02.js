//Crie um irmão para elementoOndeVoceEsta.
let father = document.getElementById('pai');
let brotherElemento = document.createElement('section');
brotherElemento.innerText = 'seção irmã';
father.appendChild(brotherElemento);

//Crie um filho para elementoOndeVoceEsta.
let ondeEsta = document.getElementById('elementoOndeVoceEsta');
let filhoDoOndeEsta = document.createElement('p');
filhoDoOndeEsta.innerHTML = '<strong>Cheguei</strong>';
ondeEsta.appendChild(filhoDoOndeEsta);

//Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDoPrimeiroFilhoDoFilho = document.createElement('section');
filhoDoPrimeiroFilhoDoFilho.innerText = 'filho do primeiro filho do filho';
primeiroFilhoDoFilho.appendChild(filhoDoPrimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho.
let paiDoFilhoDoPrimeiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement;
let terceiroFilho = paiDoFilhoDoPrimeiroFilho.nextElementSibling;
terceiroFilho.innerHTML = '<strong>Cheguei</strong>';