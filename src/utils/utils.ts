export const isStr = (str: string): boolean => {
  if (typeof str !== 'string' || !str) {
    return false;
  }
  return true;
};
