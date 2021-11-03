const deepTrim = (text: string): string => {
  return text
    .trim()
    .split(' ')
    .filter((x) => x !== '' && x !== '\n')
    .join(' ');
};

export { deepTrim };
