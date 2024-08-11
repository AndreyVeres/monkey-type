export const getCharState = (userWord: string, index: number, char: string) => {
  if (!userWord?.[index]) {
    return 'idle';
  }
  if (userWord?.[index] === char) {
    return 'correct';
  } else {
    return 'incorrect';
  }
};
