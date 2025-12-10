import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Error from './pages/Error'
import Men from './pages/Men'
import Womens from './pages/Womens'
import Nav2 from './components/Nav2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Nav2 />
       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='Womens' element={<Womens />} />
        </Route>

        <Route path='*' element={<Error />} />
       </Routes>
      <Footer/>
    </div>
  )
}

export default App
