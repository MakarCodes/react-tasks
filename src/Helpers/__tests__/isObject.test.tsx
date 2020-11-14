import isObject from '../isObject';

describe('isObject', () => {
  it('should return true if passed argument is plain object', () => {
    const examplePlainObject = {};
    expect(isObject(examplePlainObject)).toBeTruthy();
  });

  it('should return false if passed argument is not instanceof Function', () => {
    const exampleNotPlainObjects = [
      'string',
      123,
      null,
      undefined,
      () => {},
      true,
    ];
    exampleNotPlainObjects.forEach(element => {
      expect(isObject(element)).toBeFalsy();
    });
  });
});
