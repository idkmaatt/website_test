import React from 'react'
import './about.css'
import myImage from '../../assets/ggcc.jpg.webp'
import Editor from '../editor/Editor'
import {GiBlackBook, GiHomeGarage, GiLifeBar} from 'react-icons/gi'

const About = () => {
  //const [text, setText] = React.useState("")
  const [value, setValue] = React.useState("")

  return (
    <section id='about'>
      
      <h2>Informazioni utili</h2>

      <div className="container about__container">

            <div className="about__cards" contentEditable >

              <article className='about__card'>
                  <GiBlackBook className='about__icon'/>
                  <h5>Studi</h5>
                  <small>BSc Economia e Management <br /><i>Università Bocconi</i></small>
              </article>

              <article className='about__card'>
                  <GiHomeGarage className='about__icon'/>
                  <h5>Città</h5>
                  <small>Milano</small>
              </article>

              <article className='about__card'>
                  <GiLifeBar className='about__icon'/>
                  <h5>Passioni</h5>
                  <small>
                    <ul>
                      <li>Tecnologia</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            
            <p>
                  <h5>Vengo da una piccola città in provincia di Brindisi nel sud Italia. <br></br><br></br>Ho
                  studiato in un liceo classico ad Ostuni (BR) e mi sono diplomato nell'anno 2022.<br></br><br></br>I miei interessi
                  riguardano principalmente l'informatica e l'economia.</h5>   
            </p>


      </div>
    </section>
  )
}

export default About