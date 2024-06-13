import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cardlist from './pages/Cardlist'

import './assets/scss/index.scss'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/cards' element={<Cardlist />}/>
          </Routes>
        </Main>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App