import React from 'react'
import ImgUbicacion from '../../assets/img/pictures/ubicacion.jpg'
import '../../scss/styles.scss'
import iconUbi from '../../assets/img/icon/ubicacionDos.png'



const Contacto = () => {
  return (
    <>
      <div className='nuestrosPro'>
        <h2 className='titleContacto'>CONTACTANOS</h2>
      </div>

      <div>

        <div className='divImgUbi'>
          <img src={ImgUbicacion} alt='ubicacion' />
        </div>

        <div className='contacto'>
          <div className='divInputContacto'>

            <div>
              <p>Nombre</p>
              <input name='name' type='text' className='' placeholder='Escriba su nombre' />
            </div>

            <div>
              <p>Email</p>
              <input name='email' type='text' className='' placeholder='Escriba su email' />
            </div>

            <div>
              <p>Mensaje</p>
              <input name='text' type='textarea' className='inputTextContacto' />
            </div>

            <input type='submit' className='SubmitContacto' value='ENVIAR MENSAJE' id=''/>      

          </div>

          <div className='divInfoContacto'>
            <div className='divDireHora'>
              <h3>Nuestra Oficina</h3><br></br>
              <p>Calle Arenales, Loeches-Madrid. CP:28890</p>
              <a href='https://www.google.com/maps/dir//C.+Arenal,+2,+28890+Loeches,+Madrid/@40.3831806,-3.4108688,17z/data=!4m6!4m5!1m0!1m2!1m1!1s0xd42479d251e3111:0x9c3ef4ff5323b250!3e3!5m1!1e2' target="_black" >
              <div className='divUbicacionGoogle'>
                <img src={iconUbi} alt='ubicacion'></img>
                <p>COMO LLEGAR</p>
              </div><br></br>
              </a><br></br>

              <div> 
                <h3>Horarios de Oficina</h3><br/>
                <p>Dom: Cerrado</p>
                <p>Lun a Vie: 10AM - 5:30 PM </p>
              </div><br></br>
             
              
            </div><br></br>

            <div className='infoRedesContacto'>
              <h3>NetWorks</h3><br/>
              <div>
                <p>E-MAIL:</p>
                <p>info@lt-tattoequipment.com</p>
              </div><br></br>

              <div>
                <p>INSTAGRAM:</p>
                <p>lt.tattooequipment</p>
              </div><br></br>

              <div>
                <p>TELÉFONO / WHATSAPP:</p>
                <p>+34 693 23 25 46 </p>
              </div><br></br>
            </div>

          </div>
        </div>
      </div>
     
    </>
  )
}

export default Contacto