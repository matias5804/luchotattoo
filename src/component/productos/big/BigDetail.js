import React from 'react'
import '../../../scss/styles.scss'
import imageBig from '../../../assets/img/products/big/serpienteTurkesa.jpg'

const BigDetail = () => {
  return (
    <>
      <div className='divDet'>
        <div className='divImaDet'>
          <img className='imgDet' src={imageBig} alt="beast"  />
        </div>
      
        <div className='divNamePriceDet'>

          <h1 className='nameDetail'>Apoyabrazos BIG </h1>
          
          <div className='divPreBtn'>
            <h2>165<span> € </span></h2>
          </div>
        </div>    
      </div> 
    
      <div className='divDesDet'>
        <p className='textDesDet'>Apoyabrazos para tatuajes, medida Big 25 x 40cm <br/>
          Completamente regulable 
        </p>
        
        <p>
          <strong> Puedes elegir el color de la almohadilla entre:</strong><br/>
          Standar: NEGRO (sin costo extra) o<br/> 
          HABANO / TABACO / SNAKE / LILA / ROSA / FUCSIA / VERDE / AMARILLO <br/>
          (+10€)
        </p>  

        <p>
          <strong>Puedes elegir el color de la base entre:</strong><br/>
          Standar: NEGRO (sin costo extra) o <br/>
          ROSA / ROSA PALO / VERDE / AMARILLO / ROJO <br/>
          (+10€)
          
        <br/>
        <br/>
        Costo de envio + 15€ (Península)
        </p>
      </div>
    </> 
  )
}

export default BigDetail