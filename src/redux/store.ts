import { configureStore } from '@reduxjs/toolkit'
import { countriesSlice } from './slices/country.slice'

export const store = configureStore({
  reducer: {
    countriesReducer: countriesSlice.reducer 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch