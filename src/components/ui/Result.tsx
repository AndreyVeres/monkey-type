import { memo } from 'react';
import styled from 'styled-components';
import { selectUserWords, selectWords } from '../../store/keyboard.selectors';
import { GAME_TIME } from '../../store/keyboard.slice';
import { calculateResult } from '../../utils/calculateResult';
import { Flex } from '../styled/Flex';
import { useAppSelector } from '../../providers/StoreProvider/config/config';
import { devices } from '../../providers/ThemeProvider/config/BreakPoints';

export const Result = memo(() => {
  const userWord = useAppSelector(selectUserWords);
  const allWords = useAppSelector(selectWords);

  const { correctCharsCount, incorrectCharsCount, accuracy, wordsPerMinute } = calculateResult(allWords, userWord, GAME_TIME);

  return (
    <StyledResultWrapper $gap={60}>
      <Flex $dir='column' $jc='center' $align='center' $gap={20}>
        <b>Correct | Incorrect</b>
        <p>
          <StyledCorrectCount>{correctCharsCount}</StyledCorrectCount> / <StyledIncorrectCount>{incorrectCharsCount}</StyledIncorrectCount>
        </p>
      </Flex>

      <Flex $dir='column' $jc='center' $align='center' $gap={20}>
        <b>Aaccuracy</b>
        <StyledPrimaryCount>{accuracy}%</StyledPrimaryCount>
      </Flex>

      <Flex $dir='column' $jc='center' $align='center' $gap={20}>
        <b>WRM</b>
        <StyledPrimaryCount>{wordsPerMinute}</StyledPrimaryCount>
      </Flex>
    </StyledResultWrapper>
  );
});

const StyledResultWrapper = styled(Flex)`
  @media only screen and (${devices.md}) {
    flex-direction: column;
  }
`;

const StyledCorrectCount = styled.span`
  color: ${({ theme }) => theme.colors.chars.correct};
`;

const StyledIncorrectCount = styled.span`
  color: ${({ theme }) => theme.colors.chars.incorrect};
`;

const StyledPrimaryCount = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;
