import React from 'react'
import '../../scss/styles.scss'
import brandDark from '../../assets/img/icon/brandDark.png'
import brandEco from '../../assets/img/icon/brandEco.png'
import { Link } from 'react-router-dom'
import Inst from '../../assets/img/icon/iconInstagram.png'

const Footer = () => {
  return (
    <div >
      <div className='footer'>
        <div className='divbrandsFooter'>          
          <div className='divbrandDark'>
            <img src={brandDark} className='imgFooter' alt='brandLT'/>
            <p>Disfruta lo que haces</p>
          </div>

          <div className='divEco'>
            <img src={brandEco} className='brandEco' alt='brand ecologica'/>
            <p>Todas nuestras telas son ecológicas, estamos en contra del maltrato animal</p>
          </div>
        </div>

        <div className='divUlFooter'>
          <ul className='ulMapFooter'>
            <li>Inicio</li>
            <li>Catalogo</li>
            <li>Contactanos</li>
          </ul>

          <ul>
            <li>Envios </li>
            <li>Terminos y condiciones</li>
          </ul>

          <Link target="_blank" href="https://instagram.comm/lt.tattooequipment">
            <img src={Inst} className="iconInst" alt='instagram'/>
          </Link>
        </div>
      </div>
      
      <div className='Ffooter'>
        <h4>© 2022 LT Tattoo Equipment. Diseñado por Matias Alonso Pisani</h4>
      </div>
    </div>
  )
}

export default Footer