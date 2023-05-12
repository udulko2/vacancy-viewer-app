import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catalog: ""
}

export const cataloguesSlice = createSlice({
  name: 'catalogues',
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      state.catalog = action.payload
    }
  }
})

export const { setCatalog } = cataloguesSlice.actions

export default cataloguesSlice.reducer