import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CountriesAdapter } from '../../infrastructure/apiTypes'

type InitialState = {
  countries: CountriesAdapter[]
}

const initialState: InitialState = {
  countries: []
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    saveCountries: (state, action: PayloadAction<CountriesAdapter[]>) => {
      state.countries = [...action.payload];
    },
    getCountries: (state):InitialState  => {
      return {
        ...state,
        countries: state.countries
      };
    },
  },
})

export const { saveCountries, getCountries } = countriesSlice.actions