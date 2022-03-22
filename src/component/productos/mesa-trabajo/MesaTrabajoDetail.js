import React from 'react'
import imageMesaTrabajo from '../../../assets/img/products/mesaTrabajo/mesaAcoplesDos.jpg'
import '../../../scss/styles.scss'

const MesaTrabajoDetail = () => {
  return (
    <>
      <div className='divDet'>

        <div className='divImaDet'>
          <img className='imgDet' src={imageMesaTrabajo} alt="beast"  />
        </div>
      
        <div className='divNamePriceDet'>

          <h1 className='nameDetail'>MESA DE TRABAJO </h1>
          
          <div className='divPreBtn'>
            <h2>199<span> € </span></h2>
          </div>

        </div>    

      </div> 
      
      <div className='divDesDet'>
        <p className='textDesDet'>Mesa de trabajo para estudio de tattoo, robusta y dinámica con posibilidad de acoplar soporte tablet y porta rollo de papel.<br/><br/>Medidas 50cm x 35cm<br/>
        3 Estantes de metacrilato negro de 3mm de espesor. 4 Ruedas de 50mm (2 con freno).<br/><br/>
        Costo de la mesa con acoples para tablet y porta rollo de papel: €249.
         <br/><br/>
 
         Costo de envio + 15€ (Península)
        </p>

      </div>
      
    </> 
  )
}

export default MesaTrabajoDetail