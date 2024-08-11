import { useEffect } from 'react';
import { selectIsPlay, selectTimer } from '../../store/keyboard.selectors';
import { keyboardActions } from '../../store/keyboard.slice';
import { useAppSelector, useAppDispatch } from '../../providers/StoreProvider/config/config';

export const Timer = () => {
  const isPlay = useAppSelector(selectIsPlay);
  const timer = useAppSelector(selectTimer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let timerId: number;

    if (isPlay) {
      timerId = setInterval(() => {
        dispatch(keyboardActions.setTimer(timer - 1));
      }, 1000);

      if (timer === 0) {
        dispatch(keyboardActions.setIsFinished());
        clearInterval(timerId);
      }
    }

    return () => clearInterval(timerId);
  }, [timer, isPlay]);

  return <span>{timer}</span>;
};
