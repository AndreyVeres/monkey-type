import { ReloadIcon } from '../../assets/ReloadIcon';
import { useAppDispatch } from '../../providers/StoreProvider/config/config';
import { keyboardActions } from '../../store/keyboard.slice';

export const ResetButton = () => {
  const dispatch = useAppDispatch();
  const handleReset = () => dispatch(keyboardActions.reset());

  return (
    <button onClick={handleReset}>
      <ReloadIcon />
    </button>
  );
};
