import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { selectCurrentWordIndex, selectIsPlay } from '../../store/keyboard.selectors';

import { keyboardActions } from '../../store/keyboard.slice';
import { useAppSelector, useAppDispatch } from '../../providers/StoreProvider/config/config';

export const InputController = () => {
  const [inputValue, setInputValue] = useState('');
  const currentWordIndex = useAppSelector(selectCurrentWordIndex);
  const isPlay = useAppSelector(selectIsPlay);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(keyboardActions.setUserWord({ index: currentWordIndex, value: inputValue.trim() }));
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.endsWith(' ')) {
      dispatch(keyboardActions.incrementCurrentWordIndex());
      setInputValue('');
    }
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.length > 0 && !isPlay) {
      dispatch(keyboardActions.setIsPlay(true));
    }
  }, [inputValue]);

  useEffect(() => {
    if (!isPlay) {
      setInputValue('');
    }
  }, [isPlay]);

  return <StyledInput onBlur={(e) => e.target.focus()} autoFocus value={inputValue} onChange={(e) => setInputValue(e.target.value)} />;
};

const StyledInput = styled.input`
  opacity: 0;
  position: sticky;
  height: 0;
  width: 0;
`;
