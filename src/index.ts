import { reverse } from './reverse.js';

export function makePalindrome(message: string): string {
  return message + reverse(message);
}
