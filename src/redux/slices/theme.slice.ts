import { createSlice } from '@reduxjs/toolkit';

export type Theme = {
  isDark: boolean;
};

const initialState = {
  isDark: false
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    getTheme: (state) => {
      return {
        ...state,
      }
    },
    toggleTheme: (state) => {
      state.isDark = ! state.isDark;
    }
  }
})

export const {toggleTheme, getTheme} = themeSlice.actions