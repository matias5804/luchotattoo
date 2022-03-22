import React from 'react'
import { Link } from 'react-router-dom'
import imageGoliatBig from '../../../assets/img/products/goliatBig.jpg'
import '../../../scss/styles.scss'

const CardGoliatBig = () => {
  return (
    <div className='card'>
        <Link to="./GoliatBigDetail" className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageGoliatBig} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/> GOLIAT BIG</h3>
            <p className="precioCard"> <span>185</span>€</p>
            <Link to="./GoliatBigDetail" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardGoliatBig