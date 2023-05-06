import axios from 'axios';
import { setCatalogues } from '../store/cataloguesSlice';
import { setEmpty, setFetchError, setIsFetching, setVacancies } from '../store/vacanciesSlice';

const config = {
  // baseURL: 'https://api.superjob.ru/2.0/',
  baseURL: 'https://startup-summer-2023-proxy.onrender.com/2.0/',
  headers: {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
  }
}

export const getVacancies = (searchQuery, paymentFrom, paymentTo, selectedCatalog, perPage, currentPage) => {
  return async (dispatch) => {
    try {
      dispatch(setFetchError(false))
      dispatch(setIsFetching(true))
      const response = await axios.get(`vacancies/?published=1&keyword=${searchQuery}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${selectedCatalog}&count=${perPage}&page=${currentPage}`,
        config)
      console.log('getVacancies METHOD TOTAL COUNT: ' + response.data.total);
      dispatch(setEmpty(response.data.total === 0))
      dispatch(setVacancies({
        response: response.data,
        currentPage
      }))
    } catch (error) {
      dispatch(setFetchError(true))
      dispatch(setIsFetching(false))
    }
  }
}

export const getCatalogues = () => async dispatch => {
  // const response = await axios.get('https://api.superjob.ru/2.0/catalogues/')
  const response = await axios.get('catalogues/', config)
  dispatch(setCatalogues(response.data))
}

export const getVacancy = async (id, setVacancy) => {
  const response = await axios.get(`vacancies/${id}`, config)
  setVacancy(response.data)
}