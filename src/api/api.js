import axios from 'axios';
import { setFetchError, setIgnore, setIsFetching, setTotalCount, setVacancies } from '../store/vacanciesSlice';

const config = {
  // baseURL: 'https://api.superjob.ru/2.0/',
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  }
}

export const getVacancies = (searchQuery, catalog, paymentFrom, paymentTo, perPage, currentPage) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchError(false))
      dispatch(setIsFetching(true))
      const response = await axios.get(`vacancies/?published=1&keyword=${searchQuery}&catalogues=${catalog}&payment_from=${paymentFrom}&payment_to=${paymentTo}&count=${perPage}&page=${currentPage}`,
        config)
      dispatch(setIsFetching(false))
      dispatch(setTotalCount(response.data.total))
      dispatch(setVacancies(response.data))
      dispatch(setIgnore(true))
    } catch (error) {
      dispatch(setFetchError(true))
      dispatch(setIsFetching(false))
      dispatch(setIgnore(true))
    }
  }
}

export const getCatalogues = async (setCatalogues) => {
  // const response = await axios.get('https://api.superjob.ru/2.0/catalogues/')
  const response = await axios.get('catalogues/', config)
  setCatalogues(response.data)
}