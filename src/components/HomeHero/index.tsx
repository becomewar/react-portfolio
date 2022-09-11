import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/character.png';

export function HomeHero() {
  return (
    <Container data-aos='fade-up'>
      <img src={picture} alt='ninja' />

      <div>
        <TextContainer>
          <h1>Olá!</h1>
          <h2>Me chamo Diego.</h2>
        </TextContainer>

        <InfosContainer>
          <CodeItem data-aos='zoom-in'>
            <span className='comment'>// Sobre Mim</span>
            <span className='purple'>Infos</span> {'\u007B'}

            <div>
              Nome: <span className='blue'>Diego,</span>
            </div>

            <div>
              Ultimo Nome: <span className='blue'>Costa</span>
            </div>

            {'\u007D'}
          </CodeItem>

          <CodeItem data-aos='zoom-in'>
            <span className='purple'>Cargo</span> {'\u007B'}

            <div>
              Cargo: <span className='blue'>Desenvolvedor Fullstack</span>
            </div>

            <div>
              Empresa: 
                <span className='blue'>
                  <a style={{ color: '#7ac7e3'}} href='https://site.signoweb.com.br/'>
                    {'\u0020'}SignoWeb
                  </a>
                </span>
            </div>

            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
