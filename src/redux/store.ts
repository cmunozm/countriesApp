import { configureStore } from '@reduxjs/toolkit'
import { countriesSlice } from './slices/country.slice'
import { themeSlice } from './slices/theme.slice'

export const store = configureStore({
  reducer: {
    countriesReducer: countriesSlice.reducer,
    themeReducer: themeSlice.reducer 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch