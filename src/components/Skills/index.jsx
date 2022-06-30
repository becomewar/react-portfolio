import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    })

    return (
        <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <div className="container skills-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['Habilidades']}
                            idx={15}
                        />
                    </h1>

                    <h2>
                        Front-End
                    </h2>

                    <p>
                        Não sou designer, mas tenho um bom senso de estética,
                        web design responsivo e mobile-first. Tenho
                        bons conhecimentos nas seguintes tecnologias: <br /> 
                        <span className="tech"> HTML5</span>, 
                        <span className="tech"> CSS3</span>, 
                        <span className="tech"> JavaScript</span>, 
                        <span className="tech"> React</span>, 
                        <span className="tech"> TypeScript</span>, 
                        <span className="tech"> Sass.</span>
                    </p>

                    <h2>
                        Back-End
                    </h2>
                        
                    <p>
                        Tenho em mente o melhor para otimizar o código e fornecer a
                        melhor experiência ao usuário. Eu adoraria lhe fornecer qualquer
                        tipo de suporte, inclusive após a conclusão do projeto. Tenho
                        bons conhecimentos nas tecnologias: <br />
                        <span className="tech"> Python</span>, 
                        <span className="tech"> PHP</span>, 
                        <span className="tech"> NodeJS</span>, 
                        <span className="tech"> Selenium</span>, 
                        <span className="tech"> RestAPI</span>, 
                        <span className="tech"> MySQL</span>, 
                        <span className="tech"> MongoDB</span>, 
                        <span className="tech"> PostgreSQL</span>.
                    </p>

                    <h2>
                        Outros
                    </h2>

                    <p>
                        Além das tecnologias citadas acima, também tenho conhecimentos na
                        metodologia 
                        <span className="tech"> Scrum</span>, 
                        <span className="tech"> Git</span>,
                        <span className="tech"> Docker</span> e
                        <span className="tech"> Design Patterns</span>.
                        Você pode visitar meu <a href="https://www.linkedin.com/in/diegohoc/">
                        Linkedin</a> para mais detalhes, ou visualizar meu <a href="https://drive.google.com/file/d/1_OfazSK6PUblLYwiAxujK6h1Gu7pPyUK/view">Curriculo</a>. 
                    </p>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Skills