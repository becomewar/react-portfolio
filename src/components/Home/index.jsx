import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [
        'M', 
        'e', 
        ' ', 
        'c', 
        'h', 
        'a', 
        'm', 
        'o', 
        ' ', 
        'D', 
        'i', 
        'e', 
        'g', 
        'o', 
        ','
    ]
    const jobArray = [
        's', 
        'o', 
        'u',
        ' ',
        'd', 
        'e', 
        's', 
        'e', 
        'n', 
        'v', 
        'o', 
        'l', 
        'v', 
        'e', 
        'd', 
        'o', 
        'r', 
        '.'
    ]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    })
    
    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1> 
                    <span className={letterClass}>O</span>
                    <span className={`${letterClass} _12` }>l</span>
                    <span className={`${letterClass} _13`}>á,</span>
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={30} />
                    </h1>
                    <h2>Fullstack Developer / Cybersecurity student.</h2>
                    <Link to="/contato" className='flat-button'>CONTATO</Link>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Home