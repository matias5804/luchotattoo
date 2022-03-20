import React from 'react'
import { Link } from 'react-router-dom'
import imageGoliatBeast from '../../../assets/img/products/goliatBeast/goliatBeast.jpg'
import '../../../scss/styles.scss'

const CardGoliatBeast = () => {
  return (
    
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageGoliatBeast} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/>GOLIAT BEAST</h3>
            <p className="precioCard"> <span>195</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardGoliatBeast