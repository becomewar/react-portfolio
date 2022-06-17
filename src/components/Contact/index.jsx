import { useEffect, useState } from 'react'
import { send } from '@emailjs/browser';
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [toSend, setToSend] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    const onSubmit = (e) => {
      e.preventDefault();
      send(
        'service_fuq6zde',
        'template_0bgt9lm',
        toSend,
        '1GbI42GEViqQ-XirX'
      )
        .then((response) => {
          alert('Mensagem enviada!', response.status, response.text);
        })
        .catch((err) => {
          alert('Erro! Mensagem não enviada.', err);
        });
    };

    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

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
            <form onSubmit={onSubmit}>
              <ul>
                <li className='half'>
                  <input type='text' name='name' placeholder='Nome' 
                    value={toSend.name} onChange={handleChange} required  />
                </li>

                <li className='half'>
                  <input type='email' name='email' placeholder='Email' 
                    value={toSend.email} onChange={handleChange} required />
                </li>
                
                <li>
                  <input placeholder='Assunto' type='text' name='subject' 
                    value={toSend.subject} onChange={handleChange} required />
                </li>

                <li>
                  <textarea placeholder='Mensagem' name='message' 
                    value={toSend.message} onChange={handleChange} required>
                    </textarea>
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