import './index.scss';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>

            <NavLink activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>

            <NavLink activeclassname='active' className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faClipboard} color="4d4d4e" />
            </NavLink>

            <NavLink activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>

        </nav>

        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/diegohoc/'>
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/Vrag404'>
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar