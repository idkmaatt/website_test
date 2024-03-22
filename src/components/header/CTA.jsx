import React from 'react'
import CV from '../../assets/Matteo-CV.pdf'

const CTA = () => {

  return (
    
    <div className="cta">

        <a href={CV} download className='btn'>Scarica il mio CV</a>
    </div>
  )
}

export default CTA