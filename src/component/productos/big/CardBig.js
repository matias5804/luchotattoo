import React from 'react'
import { Link } from 'react-router-dom'
import imageBig from '../../../assets/img/products/big/serpienteTurkesa.jpg'
import '../../../scss/styles.scss'

const CardBig = () => {
  return (
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageBig} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/>BIG</h3>
            <p className="precioCard"> <span>165</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardBig