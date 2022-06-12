import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

  return (
    <>
      <div className="container contact-page">
        <div className='text-zone'>
          <h1>
            <AnimatedLetters 
              letterClass={letterClass}
              strArray={['Contato']}
              idx={15}
            />
          </h1>

          <p>
            Caso esteja interessado em trabalharmos juntos ou apenas me fazer uma pergunta,
            você pode usar o formulário abaixo. 
          </p>
          <div className="contact-form">
            <form action="https://getform.io/f/e4d33bbb-e030-466d-afe7-58ea0c890fac" method='POST'>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Nome' required />
                </li>

                <li className='half'>
                  <input type='email' name='email' placeholder='Email' required />
                </li>
                
                <li>
                  <input placeholder='Assunto' type='text' name='subject' required />
                </li>

                <li>
                  <textarea placeholder='Mensagem' name='message' required></textarea>
                </li>

                <li>
                  <input type='submit' className='flat-button' value='SEND' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Contact