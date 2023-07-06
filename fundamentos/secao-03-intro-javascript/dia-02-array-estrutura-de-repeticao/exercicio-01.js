const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let scoreOdd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    scoreOdd += 1;
  }
}

if (scoreOdd === 0) {
  console.log('Nenhum valor ímpar encontrado.');
} else {
  console.log(`A quantidade de impares do array é: ${scoreOdd}`);
}


let highValue = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > highValue) {
    highValue = numbers[i];
  }
}

console.log(highValue);


let sum = 0;

for (let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}

let media = sum / 10;
console.log(media);

if (media > 20) {
  console.log('O valor da média aritmética é maior que 20.');
} else {
  console.log('O valor da média aritmética é menor ou igual a 20.');
}