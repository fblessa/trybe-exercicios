const { encode, decode } = require('./encodeDecode');

describe('Exercicio 3', () => {
  it('Teste se encode é uma função.', () => {
    expect(encode).toBeDefined();
  });

  it('Teste se decode é uma função', () => {
    expect(decode).toBeDefined();
  });

  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5');
  });

  it('Para a função decode, teste se os números 1, 2, 3, 4, 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  });

  it('Encode - Teste se as demais letras e os demais números não são convertidos para cada caso', () => {
    expect(encode('after in house')).toEqual('1ft2r 3n h45s2');
  });

  it('Decode - Teste se as demais letras e os demais números não são convertidos para cada caso', () => {
    expect(decode('1ft2r 3n h45s2')).toEqual('after in house');
  });

  it('Encode - Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    const originalString = 'hello';
    const encodedString = encode(originalString);
    expect(encodedString.length).toEqual(originalString.length);
  });
  
  it('Decode - Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    const originalString = 'h2ll4';
    const decodedString = decode(originalString);
    expect(decodedString.length).toEqual(originalString.length);
  });
});
