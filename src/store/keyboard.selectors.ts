import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../providers/StoreProvider/config/types';

const selectKeyboardState = (state: RootState) => state.keyboard;
export const selectUserWordByIndex = (index: number) => createSelector(selectKeyboardState, (state) => state.userWords[index]);
export const selectCurrentWordIndex = createSelector(selectKeyboardState, (state) => state.currentWordIndex);
export const selectIsActive = (index: number) => createSelector(selectKeyboardState, (state) => state.currentWordIndex === index);

export const selectUserWords = createSelector(selectKeyboardState, (state) => state.userWords);
export const selectWords = (state: RootState) => state.keyboard.words;

export const selectIsPlay = (state: RootState) => state.keyboard.isPlay;
export const selectTimer = (state: RootState) => state.keyboard.timer;
export const selectIsFinished = (state: RootState) => state.keyboard.isFinsihed;
