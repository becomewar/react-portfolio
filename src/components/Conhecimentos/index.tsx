import  KnowledgeItem from './KnowledgeItem'; 
import SectionTitle from '../SectionTitle';

import { Container } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact, FaSass, FaPython, FaPhp, FaLaravel } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoNodejs } from 'react-icons/io5';
import { SiMysql, SiTypescript, SiMongodb } from "react-icons/si";

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' description='front-end'/>
      

      <section>
        <KnowledgeItem title='HTML' icon={<AiFillHtml5 />} />
        <KnowledgeItem title='CSS' icon={<FaCss3Alt />} />
        <KnowledgeItem title='Javascript' icon={<IoLogoJavascript />} />
        <KnowledgeItem title='Typescript' icon={<SiTypescript />} />
        <KnowledgeItem title='React' icon={<FaReact />} />
        <KnowledgeItem title='Sass' icon={<FaSass />} />
      </section>

      <br/>
      <br/>
      <br/>

      <SectionTitle description='back-end'/>
      <section>
        <KnowledgeItem title='Python' icon={<FaPython />} />
        <KnowledgeItem title='Node' icon={<IoLogoNodejs />} />
        <KnowledgeItem title='PHP' icon={<FaPhp />} />
        <KnowledgeItem title='Laravel' icon={<FaLaravel />} />
        <KnowledgeItem title='MySQL' icon={<SiMysql />} />
        <KnowledgeItem title='MongoDB' icon={<SiMongodb />} />
        </section>
    </Container>
  );
}
