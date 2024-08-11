import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { generateWordList } from '../mocks/words';
const words = generateWordList();

export const GAME_TIME = 30;

export interface KeyboardState {
  words: string[];
  userWords: string[];
  currentWordIndex: number;
  isPlay: boolean;
  timer: number;
  isFinsihed: boolean;
}

const initialState: KeyboardState = {
  words,
  userWords: [],
  currentWordIndex: 0,
  isPlay: false,
  timer: GAME_TIME,
  isFinsihed: false,
};

export const keyboardSlice = createSlice({
  name: 'keyboard',
  initialState,
  reducers: {
    incrementCurrentWordIndex: (state) => {
      state.currentWordIndex = state.currentWordIndex + 1;
    },

    setIsPlay: (state, { payload }: PayloadAction<boolean>) => {
      state.isPlay = payload;
    },

    setUserWord: (state, { payload }: PayloadAction<{ index: number; value: string }>) => {
      state.userWords[payload.index] = payload.value;
    },

    setTimer: (state, { payload }: PayloadAction<number>) => {
      state.timer = payload;
    },

    setIsFinished: (state) => {
      state.isFinsihed = true;
    },

    reset: (state) => {
      state.isPlay = false;
      state.words = generateWordList();
      state.userWords = [];
      state.currentWordIndex = 0;
      state.timer = GAME_TIME;
      state.isFinsihed = false;
    },
  },
});

export const { actions: keyboardActions } = keyboardSlice;
export const { reducer: keyboardReducer } = keyboardSlice;
