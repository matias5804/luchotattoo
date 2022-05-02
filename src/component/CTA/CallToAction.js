import React from 'react'
import { Link } from 'react-router-dom'
//import imgCTA from '../../assets/img/pictures/cta.png'
import '../../scss/styles.scss'

const CallToAction = () => {
  return (
    <div className='divCTA'>
       {/* <img className='imgCta' src="{imgCTA}" alt='pictureCTA'/>*/}
        <div>
            <h1>EQUIPAMIENTO PARA ESTUDIOS DE TATTO</h1>
            <p>Apoyabrazos / Mesas de trabajo</p>
            <Link to="./pages/Catalogo"><button>VER CATALOGO</button></Link>
        </div>
    </div>
  )
}

export default CallToAction