export const isNonEmptyStr = (str: string): boolean => {
  if (typeof str !== 'string' || !str) {
    return false;
  }
  return true;
};

export const isStr = (str: string): boolean => {
  return typeof str === 'string';
};
