import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/Layout';
import Empty from './pages/empty/Empty';
import Search from './pages/search/Search';
import Starred from './pages/starred/Starred';
import Vacancy from './pages/vacancy/Vacancy';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to='/search' />} />
          <Route path='/search' Component={Search} />
          <Route path='/vacancy' Component={Vacancy} />
          <Route path='/starred' Component={Starred} />
          <Route path='/empty' Component={Empty} />
        </Route>
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;