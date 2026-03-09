import { kebabCase } from '@/helpers/stringHelper';

describe('Test string helpers', () => {
  test('return string to kebab case', () => {
    expect(kebabCase('textAlign')).toEqual('text-align');
  });
});
