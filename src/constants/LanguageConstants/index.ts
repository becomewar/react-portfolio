import { TLanguage, TLanguageKey } from "@/hooks/LanguageContext/models";

export const Locales: {
  code: keyof TLanguage;
  country: string;
  flag: string;
}[] = [
  {
    code: "BR",
    country: "Brazil",
    flag: "fi-br",
  },
  {
    code: "EN",
    country: "English",
    flag: "fi-us",
  },
];

export const languages: Record<TLanguageKey, TLanguage> = {
  HomeSubtitle: {
    BR: "Desenvolvedor Fullstack",
    EN: "Fullstack Developer",
  },
  HomeDescription: {
    BR: "Sou um desenvolvedor apaixonado em me desafiar com objetivos novos e complexos.",
    EN: "I'm a developer passionate about challenging myself with new and complex goals.",
  },
  HomeButtonContact: {
    BR: "Diga oi!",
    EN: "Say hi!",
  },
  HomeScrollBtn: {
    BR: "Role para baixo",
    EN: "Scroll Down",
  },
  AboutTitle: {
    BR: "Sobre Mim",
    EN: "About Me",
  },
  AboutSubtitle: {
    BR: "Saiba mais sobre mim!",
    EN: "Learn more about me!",
  },
  AboutCardExpTitle: {
    BR: "Experiência",
    EN: "Experience",
  },
  AboutCardExpSubtitle: {
    BR: "2 anos",
    EN: "2 years",
  },
  AboutCardProjectsTitle: {
    BR: "Completado",
    EN: "Completed",
  },
  AboutCardProjectsSubtitle: {
    BR: "10+ projetos",
    EN: "10+ projects",
  },
  AboutCardSupportSubtitle: {
    BR: "Suporte",
    EN: "Support",
  },
  AboutDescription: {
    BR: "Sou um desenvolvedor de software full-stack curioso e competente. Vejo-me como um eterno aprendiz, motivado a resolver problemas complexos. A programação pra mim é uma maneira de encontrar a paz em meio ao caos.",
    EN: "I'm a curious and competent full-stack software developer. I see myself as an eternal learner, motivated to solve complex problems. Programming for me is a way to find peace in the midst of chaos.",
  },
  AboutButton: {
    BR: "Baixar CV",
    EN: "Download CV",
  },
  SkillsTitle: {
    BR: "Habilidades",
    EN: "Skills",
  },
  SkillsSubtitle: {
    BR: "Meu level técnico",
    EN: "My technical level",
  },
  SkillsCardFrontTitle: {
    BR: "Desenvolvimento Front-End ",
    EN: "Front-End Development",
  },
  SkillsCardBackTitle: {
    BR: "Desenvolvimento Back-End",
    EN: "Back-End Development",
  },
  SkillsAdvanced: {
    BR: "Avançado",
    EN: "Advanced",
  },
  SkillsIntermed: {
    BR: "Intermediário",
    EN: "Intermediary",
  },
  SkillsBeginner: {
    BR: "Iniciante",
    EN: "Basic",
  },
  QualificationsTitle: {
    BR: "Qualificações",
    EN: "Qualifications",
  },
  QualificationsSubtitle: {
    BR: "Minha jornada até aqui",
    EN: "My journey till here",
  },
  QualificationsLeftTitle: {
    BR: "Educação",
    EN: "Education",
  },
  QualificationUdemy: {
    BR: "Curso Udemy",
    EN: "Udemy Course",
  },
  QualificationPython: {
    BR: "Python 3 Avançado (124 horas)",
    EN: "Python 3 Advanced (124 hours)",
  },
  QualificationJS: {
    BR: "Javascript/ Typescript avançado (145.5 horas)",
    EN: "Advanced Javascript/ Typescript (145.5 hours)",
  },
  QualificationPHP: {
    BR: "PHP 7 Avançado (33.5 horas)",
    EN: "PHP 7 Advanced (33.5 hours)",
  },
  QualificationTrilingual: {
    BR: "Trilíngue",
    EN: "Trilingual",
  },
  QualificationTrilingualDesc: {
    BR: "Eu falo três linguas. (PT-BR, EN, RU)",
    EN: "I speak three languages. (PT-BR, EN, RU)",
  },
  QualificationPresentDate: {
    BR: "Presente",
    EN: "Present",
  },
  QualificationsRightTitle: {
    BR: "Experiência",
    EN: "Experience",
  },
  QualificationsSignoWebTitle: {
    BR: "Desenvolvedor Fullstack",
    EN: "Fullstack Developer",
  },
  QualificationsSignoWebDesc: {
    BR: "Software house em que fui responsavel pela manutenção e desenvolvimento de sistemas com MERN Stack.",
    EN: "Software house where I was responsible for the maintenance and development of systems with MERN Stack.",
  },
  QualificationsEloRocketTitle: {
    BR: "Desenvolvedor Front-End",
    EN: "Front-End Developer",
  },
  QualificationsEloRocketDesc: {
    BR: "Neste Projeto, sou responsavel pelo desenvolvimento front-end de um e-commerce em React.",
    EN: "In this project, I'm responsible for the front-end development of an e-commerce in React.",
  },
  QualificationsFreelancerDesc: {
    BR: "Como freelancer, trabalho como fullstack em pequenas aplicações e sistemas.",
    EN: "As a freelancer, I work as a fullstack on small applications and systems.",
  },
  ContactTitle: {
    BR: "Entrar em Contato",
    EN: "Get in touch",
  },
  ContactSubtitle: {
    BR: "Me diga oi!",
    EN: "Say hi to me!",
  },
  ContactLeftTitle: {
    BR: "Converse comigo",
    EN: "Talk to me",
  },
  ContactRightTitle: {
    BR: "Escreva para mim sobre seu projeto",
    EN: "Write to me about your project",
  },
  ContactNameLabel: {
    BR: "Nome",
    EN: "Name",
  },
  ContactNamePlaceholder: {
    BR: "Insira seu nome..",
    EN: "Insert your name..",
  },
  ContactEmaiPlaceholder: {
    BR: "Insira seu email..",
    EN: "Enter your email..",
  },
  ContactProjectLabel: {
    BR: "Projeto",
    EN: "Project",
  },
  ContactProjectPlaceholder: {
    BR: "Escreva sobre seu projeto..",
    EN: "Write about your project..",
  },
  ContactSubmitButton: {
    BR: "Enviar mensagem",
    EN: "Send message",
  },
  ContactSubmitLoading: {
    BR: "Enviando...",
    EN: "Sending...",
  },
  ModalSucessTitle: {
    BR: "Mensagem enviada!",
    EN: "Message sent!",
  },
  ModalSucessSub: {
    BR: "Irei te retornar o mais breve possivel.",
    EN: "I will get back to you as soon as possible.",
  },
  ModalSucessClose: {
    BR: "Fechar",
    EN: "Close",
  },
};
