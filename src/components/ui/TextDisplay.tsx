import { memo } from 'react';
import styled, { css } from 'styled-components';
import { useAppSelector } from '../../providers/StoreProvider/config/config';
import { selectWords } from '../../store/keyboard.selectors';
import { Flex } from '../styled/Flex';
import { InputController } from './InputController';
import { Timer } from './Timer';
import { Word } from './Word';
import { devices } from '../../providers/ThemeProvider/config/BreakPoints';

export const TextDisplay = memo(() => {
  const words = useAppSelector(selectWords);

  return (
    <>
      <Timer />
      <StyledViewport>
        <Flex $wrap='wrap' $gap={10}>
          {words.map((word, index) => {
            return <Word key={index} word={word} index={index} />;
          })}
        </Flex>
      </StyledViewport>
      <InputController />
    </>
  );
});

const StyledViewport = styled.div`
  position: relative;
  overflow: hidden;
  width: 80vw;

  &::-webkit-scrollbar {
    width: 10px;
  }

  ${({ theme }) => css`
    height: calc(${theme.sizes.charHeight.large * theme.sizes.vieportRows}px);
  `}

  ${({ theme }) => css`
    @media only screen and (${devices.xl}) {
      height: calc(${theme.sizes.charHeight.medium * theme.sizes.vieportRows}px);
    }
  `}
`;
