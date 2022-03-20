import React from 'react'
import { Link } from 'react-router-dom'
import imageMonster from '../../../assets/img/products/monster/monster.jpg'
import '../../../scss/styles.scss'

const CardMonster = () => {
  return (
    <div className='card'>
        <Link to={(``)}className='div_imgCard'>  
            <div className='divImgCard'>
                <img src={imageMonster} alt="carddBeast" className='imgCard'></img>
            </div>
        </Link> 

        <div className='divProPreBot'>
            <h3 className="tituloCard">Apoyabrazos <br/>MONSTER</h3>
            <p className="precioCard"> <span>185</span>€</p>
            <Link to="" className='div_imgCard'>  
                <button className="btnComprarCard">
                    - Ver Artículo -
                </button>
            </Link>
        </div>
    </div>
  )
}

export default CardMonster