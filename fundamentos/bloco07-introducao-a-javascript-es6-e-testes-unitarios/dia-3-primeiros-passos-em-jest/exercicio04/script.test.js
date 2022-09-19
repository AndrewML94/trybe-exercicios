const {encode, decode} = require('./script');

describe('Para as funções encode e decore, será executado os seguintes testes.', () => {
  test('Teste se encode e decode são funções.', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  })
  test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente.', () => {
    expect(encode('a, e, i, o, u')).toMatch('1, 2, 3, 4, 5');
  })
  test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente.', () => {
    expect(decode('1, 2, 3, 4, 5')).toMatch('a, e, i, o, u');
  })
  test('Teste se as demais letras/números não são convertidos para cada caso.', () => {
    expect(decode('6, 7, 8, 9')).toMatch('6, 7, 8, 9');
  })
  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(decode('trybe').length).toEqual(5);
  })
  test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
    expect(encode('trybe').length).toEqual(5);
  })
})