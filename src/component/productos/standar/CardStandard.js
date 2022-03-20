import React from 'react'
import { Link } from 'react-router-dom'
import imageStandar from '../../../assets/img/products/standar.jpg'
import '../../../scss/styles.scss'

const CardStandard = () => {
  return (
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageStandar} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/>STANDAR</h3>
            <p className="precioCard"> <span>155</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardStandard