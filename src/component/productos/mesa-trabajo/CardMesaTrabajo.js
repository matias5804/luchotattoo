import React from 'react'
import { Link } from 'react-router-dom'
import imageMesaTrabajo from '../../../assets/img/products/mesaTrabajo/mesaAcoplesDos.jpg'
import '../../../scss/styles.scss'

const CardMesaTrabajo = () => {
  return (
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageMesaTrabajo} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">MESA <br/> DE TRABAJO</h3>
            <p className="precioCard"> <span>199</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardMesaTrabajo