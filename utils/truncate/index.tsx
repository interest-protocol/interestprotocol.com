export const truncate = (str: string, max = 14) =>
  str.length > max ? str.slice(0, max) + '…' : str;
