import { expect, test } from '@jest/globals';
import { makePalindrome } from '../index.js';
test(`makes palindromes`, () => {
    expect(makePalindrome('no')).toBe('noon');
});
