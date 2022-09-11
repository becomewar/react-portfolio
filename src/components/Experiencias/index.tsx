import SectionTitle from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='01 ano' description='de experiência' />

      <section>
        <ExperienceItem
          year='2021'
          title='Dev. Fullstack'
          description='Trabalhei com a criação de um e-commerce, refatoração de projeto antigo feito em jQuery para React, visando o clean-code e facilitando a manutenção futura. '
        />

        <ExperienceItem
          year='2022'
          title='Dev. React'
          description='Participei de um projeto em começar uma startup de um e-commerce online utilizando react, meu papel foi desenvolver interfaces tanto para o usuário quanto para o admin.'
        />

        <ExperienceItem
          year='2022'
          title='Dev. Fullstack'
          description='Trabalho atualmente em uma software house, meu papel é fazer a manutenção em diversos sistemas diferentes utilizando as mais variadas linguagens: PHP, Laravel, JavaScript, React, jQuery etc.'
        />
      </section>
    </Container>
  );
}
