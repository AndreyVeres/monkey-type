import { FC, memo, useEffect, useRef } from 'react';
import { selectIsActive, selectUserWordByIndex } from '../../store/keyboard.selectors';
import styled from 'styled-components';
import { Flex } from '../styled/Flex';
import { Caret } from './Caret';
import { Char } from './Char';
import { useAppSelector } from '../../providers/StoreProvider/config/config';

interface WordProps {
  word: string;
  index: number;
}

export const Word: FC<WordProps> = memo(({ word, index }) => {
  const userWord = useAppSelector(selectUserWordByIndex(index));
  const isActive = useAppSelector(selectIsActive(index));
  const ref = useRef<HTMLDivElement | null>(null);
  const wordArray = word.split('');

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest',
      });
    }
  }, [ref, ref.current]);

  return (
    <StyledWord ref={isActive ? ref : null}>
      {wordArray.map((char, index) => (
        <Char key={index} char={char} userWord={userWord} index={index} />
      ))}

      {userWord?.length > word.length &&
        userWord
          .slice(word.length)
          .split('')
          .map((char, index) => <Char excessChar key={index} char={char} userWord={userWord} index={index} />)}

      {isActive && <Caret animate={!userWord?.length} position={userWord?.length || 0} />}
    </StyledWord>
  );
});

const StyledWord = styled(Flex)`
  position: relative;
`;
