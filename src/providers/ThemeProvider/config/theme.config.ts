import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      caretColor: string;
      chars: {
        correct: string;
        incorrect: string;
        idle: string;
        excess: string;
      };
    };

    fontSizes: {
      small: string;
      medium: string;
      large: string;
    };

    sizes: {
      charHeight: {
        small: number;
        medium: number;
        large: number;
      };
      vieportRows: number;
      charWidth: {
        small: number;
        medium: number;
        large: number;
      };
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#e2b714',
    secondary: '#323437',
    chars: {
      correct: '#fff',
      incorrect: '#ca4754',
      idle: '#646669',
      excess: '#7e2a33',
    },
    caretColor: '#e2b714',
  },

  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '25px',
  },

  sizes: {
    charHeight: {
      small: 20,
      medium: 30,
      large: 40,
    },
    vieportRows: 3,
    charWidth: {
      small: 10,
      medium: 13,
      large: 20,
    },
  },
};
