import React from 'react'
import { Link } from 'react-router-dom'
import imageBeast from '../../../assets/img/products/beast.jpg'
import '../../../scss/styles.scss'



const cardBeast = () => {
  return (
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageBeast} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/>BEAST</h3>
            <p className="precioCard"> <span>175</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default cardBeast