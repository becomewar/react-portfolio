import { HomeContainer } from '../styles/HomeStyles';
import { Header } from "../components/Header";
import { HomeHero } from '../components/HomeHero';
import { Experiencias } from '../components/Experiencias';
import { Conhecimentos } from '../components/Conhecimentos';
import { FormContato } from '../components/FormContato';
import { Footer } from '../components/Footer';
import { useEffect } from 'react';
import Head from 'next/head';

import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home | Portfólio</title>

        <meta 
          name='description'
          content='Sou um desenvolvedor fullstack e aqui apresento meu site pessoal.'
        />
      </Head>

      <Header />

      <main className='container'>
        <HomeHero />
        <Experiencias />
        <Conhecimentos />
        <FormContato />
      </main>

      <Footer />
    </HomeContainer>
  );
}
