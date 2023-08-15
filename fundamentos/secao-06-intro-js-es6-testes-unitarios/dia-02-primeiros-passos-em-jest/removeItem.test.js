const removeItem = require('./removeItem');

describe('Exercicio 1', () => {
  it('Verifica se é retornado um array sem o Item', () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3))
  })
  it('Verifica se não retorna o array [1, 2, 3, 4]', () => {
    expect([1, 2, 4]).toEqual(removeItem([1, 2, 3, 4], 3))
  })
  it('Verifique se removeItem([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect([1, 2, 3, 4]).toEqual(removeItem([1, 2, 3, 4], 5))
  })
})