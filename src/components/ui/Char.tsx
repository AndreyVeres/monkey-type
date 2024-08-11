import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { getCharState } from '../../utils/getCharState';
import { devices } from '../../providers/ThemeProvider/config/BreakPoints';

interface CharProps {
  char: string;
  userWord: string;
  index: number;
  excessChar?: boolean;
}

export const Char: FC<CharProps> = memo(({ char, userWord, index, excessChar }) => (
  <StyledChar $state={excessChar ? 'excess' : getCharState(userWord, index, char)}>{char}</StyledChar>
));

type CHAR_STATE = 'idle' | 'correct' | 'incorrect' | 'excess';

interface StyledCharProps {
  $state: CHAR_STATE;
}

const StyledChar = styled.span<StyledCharProps>`
  display: block;
  transition: all 0.2s;

  width: ${({ theme }) => theme.sizes.charWidth.large + 'px'};
  height: ${({ theme }) => theme.sizes.charHeight + 'px'};

  ${({ $state, theme }) =>
    $state === 'idle' &&
    css`
      color: ${theme.colors.chars.idle};
    `}

  ${({ $state, theme }) =>
    $state === 'correct' &&
    css`
      color: ${theme.colors.chars.correct};
    `}

    ${({ $state, theme }) =>
    $state === 'incorrect' &&
    css`
      color: ${theme.colors.chars.incorrect};
    `}

    ${({ $state, theme }) =>
    $state === 'excess' &&
    css`
      color: ${theme.colors.chars.excess};
    `}


  @media only screen and (${devices.xl}) {
    width: ${({ theme }) => theme.sizes.charWidth.medium + 'px'};
  }

  @media only screen and (${devices.sm}) {
    width: ${({ theme }) => theme.sizes.charWidth.small + 'px'};
  }
`;
