import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CountriesAdapter } from '../../infrastructure/apiTypes'

const initialState: CountriesAdapter[] = []

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    saveCountries: (state, action: PayloadAction<CountriesAdapter[]>):CountriesAdapter[] => {
      state = [...action.payload];
      return action.payload;
    }
  },
})

export const { saveCountries } = countriesSlice.actions