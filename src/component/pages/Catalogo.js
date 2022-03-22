import React from 'react'
import Productos from '../catalogo/Productos'

const Catalogo = () => {
  return (
    <div>
      <div className='nuestrosPro'>
        <h2>CATALOGO</h2>
        <h3>Pensamos y diseñamos cada producto para la comodidad del tatuador. Nuestros clientes los destacan por la calidad y resistencia de cada material. <br/>
        LT Tattoo Equipment Disfrutá de lo que haces.
        </h3>
      </div>
      <Productos/>
    </div>
  )
}

export default Catalogo