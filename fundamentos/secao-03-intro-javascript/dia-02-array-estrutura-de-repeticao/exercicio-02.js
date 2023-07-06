let fatorial = 10;
let contador = fatorial - 1;

for (let i = 10; i > 1; i--) {
  fatorial *= contador;
  contador--;
}

console.log(fatorial);