import { reverse } from './reverse.js';
export function makePalindrome(message) {
    return message + reverse(message);
}
