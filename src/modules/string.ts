import { isStr } from '../utils/string';
import { emojiRGIRegex } from '../utils/emoji';

const chineseTester = /[\u4E00-\u9FFF]+/;

export const containsEmoji = (str: string): boolean => {
  return isStr(str) ? emojiRGIRegex.test(str) : false;
};

export const containsChinese = (str: string): boolean => {
  return isStr(str) ? chineseTester.test(str) : false;
};

export { emojiRGIRegex as emojiTester };
export { chineseTester };
