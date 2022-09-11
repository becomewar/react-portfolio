import { ContainerItem } from './styles';

interface ExperienceProps {
    year: string;
    title: string;
    description: string;
}

export default function ExperienceItem({ year, title, description }: ExperienceProps) {
    return (
        <ContainerItem data-aos='fade-up'>
            <div>
                <h1>{year}</h1>
                <h2>{title}</h2>
                
                <p>{description}</p>
            </div>
        </ContainerItem>
        
    )
}