import { isStr } from './utils/utils';
import { emojiRGIRegex } from './utils/patterns';

export const containsEmoji = (str: string): boolean => {
  return isStr(str) ? emojiRGIRegex.test(str) : false;
};
