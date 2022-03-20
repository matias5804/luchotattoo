import React from 'react'
import '../../scss/styles.scss'
import logoVertical from '../../assets/img/icon/brandLight.png'
import logoHorizontal from '../../assets/img/icon/brandHLight.png'
import iconMenuOpen from '../../assets/img/icon/iconMenuOpen.png'
import iconMenuClose from '../../assets/img/icon/iconMenuClose.png'

import { Link } from 'react-router-dom'


const NavBar = () => {
  return (
    <>
        <header id="header">
            <nav>

                
                <div className="nav__divBrand">
                    <Link to="index.html" className="brandLink">
                        <img className="brand" src={logoVertical} alt="Brund"/>
                        <img className="brandDos" src={logoHorizontal} alt="Brund"/>
                    </Link>
                </div>

                <div className="divBtnNav">
                    <a href="#header" className="menuMobile open">
                        <img className="nav__img" src={iconMenuOpen} alt="button open menu"/>
                    </a>

                    <a href="#a" className="menuMobile close">
                        <img className="nav__img" src={iconMenuClose}  alt="button close menu"/>
                    </a>
                </div>
            </nav> 

            <ul className="ulNav">
                <li><Link to="../pages/Inicio">INICIO</Link></li>
                <li><Link to="../pages/Catalogo">CATALOGO</Link></li>
                <li><Link to="../pages/Clientes">CLIENTES</Link></li>
                <li><Link to="../pages/Contacto">CONTACTO</Link></li>
            </ul>
        </header>
    </>
  )
}

export default NavBar