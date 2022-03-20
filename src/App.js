import React from 'react'
import NavBar from './component/navBar/NavBar.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './component/footer/Footer.js'
import Clientes from './component/pages/Clientes'
import Catalogo from './component/pages/Catalogo.js'
import Contacto from './component/pages/Contacto.js'
import Inicio from './component/pages/Inicio.js'



const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/pages/Catalogo' element={<Catalogo/>}/>
          <Route path='/pages/Clientes' element={<Clientes/>}/>
          <Route path='/pages/Contacto' element={<Contacto/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>

        
    </BrowserRouter>
  )
}

export default App