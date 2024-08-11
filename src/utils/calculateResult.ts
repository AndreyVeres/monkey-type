export const calculateResult = (allWords: string[], userWord: string[], timerSeconds: number) => {
  let correctCharsCount = 0;
  let incorrectCharsCount = 0;
  let currentWordsCount = 0;
  // debugger
  for (let i = 0; i < userWord.length; i++) {
    const currentWord = userWord[i];
    const referenceWord = allWords[i];

    if (currentWord === referenceWord) {
      currentWordsCount += 1;
    }

    currentWord.split('').forEach((char, index) => {
      if (char === referenceWord[index]) {
        correctCharsCount += 1;
      } else {
        incorrectCharsCount += 1;
      }
    });

  }

  const totalCharsTyped = correctCharsCount + incorrectCharsCount;
  const accuracy = totalCharsTyped === 0 ? 0 : ((correctCharsCount / totalCharsTyped) * 100).toFixed(2);

  const wordsPerMinute = (currentWordsCount / (timerSeconds / 60)).toFixed(2);

  return {
    correctCharsCount,
    incorrectCharsCount,
    accuracy: Number(accuracy),
    wordsPerMinute: Number(wordsPerMinute),
  };
};
