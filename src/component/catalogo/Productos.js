import React from 'react'
import CardBeast from '../productos/beast/CardBeast'
import CardBig from '../productos/big/CardBig'
import CardGoliatBeast from '../productos/goliat-beast/CardGoliatBeast'
import CardGoliatBig from '../productos/goliat-big/CardGoliatBig'
import CardMesaTrabajo from '../productos/mesa-trabajo/CardMesaTrabajo'
import CardMonster from '../productos/monster/CardMonster'
import CardStandard from '../productos/standar/CardStandard'

const Productos = () => {
  return (
    <div className='tienda'>
      <CardBeast/>
      <CardBig/>
      <CardGoliatBeast/>
      <CardGoliatBig/>
      <CardMonster/>
      <CardStandard/>
      <CardMesaTrabajo/>
    </div>
  )
}

export default Productos