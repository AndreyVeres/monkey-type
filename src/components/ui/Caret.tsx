import { FC, memo } from 'react';
import styled, { css } from 'styled-components';
import { devices } from '../../providers/ThemeProvider/config/BreakPoints';

interface CaretProps {
  position: number;
  animate: boolean;
}

export const Caret: FC<CaretProps> = memo(({ position, animate }) => <StyledCaret $animate={animate} $pos={position}></StyledCaret>);

const StyledCaret = styled.span<{ $pos: number; $animate: boolean }>`
  display: block;
  width: 2px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.caretColor};
  position: absolute;
  transition: all 0.1s;

  ${({ $animate }) =>
    $animate &&
    css`
      animation: fade 1s infinite;
      @keyframes fade {
        0%,
        100% {
          opacity: 0;
        }

        50% {
          opacity: 1;
        }
      }
    `}

  ${({ $pos, theme }) => css`
    left: ${$pos * theme.sizes.charWidth.large + 'px'};
  `}

  ${({ $pos, theme }) => css`
    @media only screen and (${devices.xl}) {
      left: ${$pos * theme.sizes.charWidth.medium + 'px'};
    }
  `}

  ${({ $pos, theme }) => css`
    @media only screen and (${devices.sm}) {
      left: ${$pos * theme.sizes.charWidth.small + 'px'};
    }
  `}
`;
