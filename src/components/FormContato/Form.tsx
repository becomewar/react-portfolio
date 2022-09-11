import { FormContainer, Input, TextArea } from './styles';
import { FormEvent, useState } from 'react';
import { sendContactMail } from '../../services/sendMail';
import toast from "react-hot-toast";
import theme from "../../styles/theme";

export default function Form() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (loading) return;

        await sendContactMail(nome, email, mensagem)

        if (!nome.trim() || !email.trim() || !mensagem.trim()) {
            toast('Preencha todos os campos para enviar sua mensagem!', {
                style:  {
                    background: theme.error,
                    color: '#fff'
                }
            });
            return;
        };

        try {
            setLoading(true);
            await sendContactMail(nome, email, mensagem);

            setNome('');
            setEmail('');
            setMensagem('');

            toast('Mensagem enviada com sucesso!', {
                style: {
                    background: theme.secondary,
                    color: '#fff'
                }
            });
        } catch (err) {
            toast('Ocorreu um erro. Tente novamente!', {
                style: {
                    background: theme.error,
                    color: '#fff'
                }
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <FormContainer data-aos='fade-up' onSubmit={handleSubmit}> 
            <Input 
                placeholder='Nome' 
                required
                value={nome}
                onChange={({ target }) => setNome(target.value)} 
            />

            <Input 
                placeholder='Email' 
                type='email'
                required 
                value={email}
                onChange={({ target }) => setEmail(target.value)} 
            />

            <TextArea
                placeholder="Mensagem"
                value={mensagem}
                onChange={({ target }) => setMensagem(target.value)}
            />
            
            <button type='submit' disabled={loading}>ENVIAR</button>
        </FormContainer>
    )
}