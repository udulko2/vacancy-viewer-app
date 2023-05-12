import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isFetching: false,
  isFetchError: false,
  currentPage: 1,
  perPage: 4,
  totalCount: 0,
  searchValue: "",
  ignore: false
}

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setVacancies: (state, action) => {
      state.items = action.payload.objects
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload
    },
    setFetchError: (state, action) => {
      state.isFetchError = action.payload
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setTotalCount: (state, action) => {
      state.totalCount = action.payload
    },
    setIgnore: (state, action) => {
      state.ignore = action.payload
    }
  }
})

export const { setVacancies, setIsFetching, setFetchError, setCurrentPage, setTotalCount, setIgnore } = vacanciesSlice.actions

export default vacanciesSlice.reducer