import { kebabCase } from './stringHelper';

describe('Test string helpers', () => {
  test('return string to kebab case', () => {
    expect(kebabCase('textAlign')).toEqual('text-align');
  });
});
