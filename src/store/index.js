import { configureStore } from '@reduxjs/toolkit'
import cataloguesSlice from './cataloguesSlice'
import paymentSlice from './paymentSlice'
import searchSlice from './searchSlice'
import vacanciesSlice from './vacanciesSlice'

export const store = configureStore({
  reducer: {
    catalogues: cataloguesSlice,
    payment: paymentSlice,
    search: searchSlice,
    vacancies: vacanciesSlice
  }
})