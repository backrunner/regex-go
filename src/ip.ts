import { isStr } from './utils/utils';

const ipAddressTester = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/;

export const isIPAddress = (str: string): boolean => {
  return isStr(str) ? ipAddressTester.test(str) : false;
};
