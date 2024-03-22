import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/hhiioo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    
    
      <header id='home'>

        <div className="container header__container">

          <h5>Ciao, mi chiamo</h5>
          <h1>Matteo Francavilla</h1>
          <h5 className="text-light">Studente di secondo anno CLEAM</h5>
          <CTA/>
          <HeaderSocials/>

          <div className="me">

            <img src={me} alt='me'/>
          </div>

        </div>
      </header>

    
    
  )
}

export default Header