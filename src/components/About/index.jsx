import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Sobre', ' ', 'mim.']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Sou um desenvolvedor full-stack muito ambicioso. Espero ter a oportunidade de 
                        trabalhar com as mais diversas tecnologias em projetos desafiadores e diversos.
                    </p>

                    <p>
                        Estou em busca do meu aperfeiçoamento profissional e pessoal, tentando sempre 
                        agregar valor e resultados através de soluções dinâmicas e práticas.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About