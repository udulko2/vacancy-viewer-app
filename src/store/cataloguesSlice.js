import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  selectedCatalog: ""
}

export const cataloguesSlice = createSlice({
  name: 'catalogues',
  initialState,
  reducers: {
    setCatalogues: (state, action) => {
      state.items = action.payload
    },
    setSelectedCatalog: (state, action) => {
      state.selectedCatalog = action.payload
    }
  }
})

export const { setCatalogues, setSelectedCatalog } = cataloguesSlice.actions

export default cataloguesSlice.reducer