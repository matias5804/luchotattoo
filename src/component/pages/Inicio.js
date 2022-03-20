import React from 'react'
import CallToAction from '../CTA/CallToAction'
import '../../scss/styles.scss'
import NuestrosPro from '../nuestrosProductos/NuestrosPro'
import Productos from '../catalogo/Productos'


const Inicio = () => {
  return (
      <>
        <div className='CTA'><CallToAction/></div>
        <NuestrosPro/>
        <Productos/>
        
      </>

  )
}

export default Inicio