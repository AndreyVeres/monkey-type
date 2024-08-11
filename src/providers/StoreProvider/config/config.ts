import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { keyboardReducer } from '../../../store/keyboard.slice';
import { RootState } from './types';

export const createReduxStore = () => {
  const rootReducer = combineReducers<RootState>({
    keyboard: keyboardReducer,
  });

  const store = configureStore({
    reducer: rootReducer,
  });

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
