import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  paymentFrom: "",
  paymentTo: ""
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentFrom: (state, action) => {
      state.paymentFrom = action.payload
    },
    setPaymentTo: (state, action) => {
      state.paymentTo = action.payload
    }
  }
})

export const { setPaymentFrom, setPaymentTo } = paymentSlice.actions

export default paymentSlice.reducer