import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isFetching: true,
  isFetchError: false,
  currentPage: 1,
  perPage: 4,
  totalCount: 0,
  empty: false
}

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setVacancies: (state, action) => {
      state.items = action.payload.response.objects
      state.isFetching = false
      state.totalCount = action.payload.response.total
      state.currentPage = action.payload.currentPage
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setFetchError: (state, action) => {
      state.isFetchError = action.payload
    },
    setEmpty: (state, action) => {
      state.empty = action.payload
    }
  }
})

export const { setVacancies, setIsFetching, setFetchError, setEmpty } = vacanciesSlice.actions

export default vacanciesSlice.reducer