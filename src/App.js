import React from 'react'
import NavBar from './component/navBar/NavBar.js'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './component/footer/Footer.js'
import Clientes from './component/pages/Clientes'
import Catalogo from './component/pages/Catalogo.js'
import Contacto from './component/pages/Contacto.js'
import Inicio from './component/pages/Inicio.js'
import BeastDetail from './component/productos/beast/BeastDetail.js'
import BigDetail from './component/productos/big/BigDetail.js'
import GoliatBeastDetail from './component/productos/goliat-beast/GoliatBeastDetail'
import GoliatBigDetail from './component/productos/goliat-big/GoliatBigDetail.js'
import MesaTrabajoDetail from './component/productos/mesa-trabajo/MesaTrabajoDetail.js'
import MonsterDetail from './component/productos/monster/MonsterDetail.js'
import StandarDetail from './component/productos/standar/StandarDetail.js'
import WhatsApp from './component/whatsapp/WhatsApp.js'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/pages/Catalogo' element={<Catalogo/>}/>
        <Route path='/pages/Clientes' element={<Clientes/>}/>
        <Route path='/pages/Contacto' element={<Contacto/>}/>
        <Route path='/BeastDetail' element={<BeastDetail/>}/>
        <Route path='/BigDetail' element={<BigDetail/>}/>
        <Route path='/GoliatBeastDetail' element={<GoliatBeastDetail/>}/>
        <Route path='/MesaTrabajoDetail' element={<MesaTrabajoDetail/>}/>
        <Route path='/GoliatBigDetail' element={<GoliatBigDetail/>}/>
        <Route path='/MonsterDetail' element={<MonsterDetail/>}/>
        <Route path='/StandarDetail' element={<StandarDetail/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <WhatsApp/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App