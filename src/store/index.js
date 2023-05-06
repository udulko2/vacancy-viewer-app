import { configureStore } from '@reduxjs/toolkit'
import cataloguesSlice from './cataloguesSlice'
import paymentSlice from './paymentSlice'
import vacanciesSlice from './vacanciesSlice'

export const store = configureStore({
  reducer: {
    vacancies: vacanciesSlice,
    catalogues: cataloguesSlice,
    payment: paymentSlice
  }
})