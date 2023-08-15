const myFizzBuzz = require('./fizzBuzz');

describe('Exercicio 2', () => {
  it('Caso num seja um número divisível por 3 e 5, a função retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  })
  it('Caso num seja um número divisível apenas por 3, a função retorna "fizz"', () => {
    expect(myFizzBuzz(9)).toEqual("fizz");
  })
  it('Caso num seja um número divisível apenas por 5, a função retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toEqual("buzz");
  })
  it('Caso num seja um número que não é divisível nem por 3 nem por 5, a função retorna o próprio número num', () => {
    expect(myFizzBuzz(11)).toEqual(11);
  })
  it('Caso num não seja um número, a função retorna false', () => {
    expect(myFizzBuzz(!Number)).toBeFalsy();
  })
})
