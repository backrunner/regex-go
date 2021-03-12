import { isStr } from './utils/utils';

const domainTester = /^(?!:\/\/)([a-zA-Z0-9-_\u4E00-\u9FA5]+\.)*[a-zA-Z0-9\u4E00-\u9FA5][a-zA-Z0-9-_\u4E00-\u9FA5]+\.[a-zA-Z\u4E00-\u9FA5]{2,11}?$/;

export const isDomain = (str: string): boolean => (isStr(str) ? domainTester.test(str) : false);
