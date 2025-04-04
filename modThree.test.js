const modThree = require('./modThree');

describe('modThree FSM function', () => {
  test('modThree("1101") should return 1', () => {
    expect(modThree('1101')).toBe(1);
  });

  test('modThree("1110") should return 2', () => {
    expect(modThree('1110')).toBe(2);
  });

  test('modThree("1111") should return 0', () => {
    expect(modThree('1111')).toBe(0);
  });

  test('modThree("110") should return 0', () => {
    expect(modThree('110')).toBe(0);
  });

  test('modThree("1010") should return 1', () => {
    expect(modThree('1010')).toBe(1);
  });

  test('modThree("0") should return 0', () => {
    expect(modThree('0')).toBe(0);
  });

  test('modThree("1") should return 1', () => {
    expect(modThree('1')).toBe(1);
  });

  test('modThree("10") should return 2', () => {
    expect(modThree('10')).toBe(2);
  });

  test('modThree("11") should return 0', () => {
    expect(modThree('11')).toBe(0);
  });

  test('modThree("1100101101") should return 0', () => {
    expect(modThree('1100101101')).toBe(0);
  });

  test('Empty input should return 0', () => {
    expect(modThree('')).toBe(0);
  });
});
