import { useState } from 'react';
import logoCAA from "../assets/logo.png";
import './Navbar.css';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='navbar'>
            <div className="logo">
                <a href="/">
                    <img src={logoCAA} alt="Logo" />
                </a>
            </div>

            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>

            <ul className={isOpen ? "nav-links open" : "nav-links"}>
                <li><a href="/noticias">Noticias</a></li>
                <li><a href="/seleccion-nacional">Selección Nacional</a></li>
                <li className="torneos-li">
                    <span className="torneos">
                        Torneos <i className="bi bi-caret-down-fill"></i>
                    </span>
                    <div className="torneos-dropdown">
                        <a href="/torneos/nacional">Torneo Nacional</a>
                        <a href="/torneos/liga-nacional">Liga Nacional</a>
                    </div>
                </li>
                <li><a href="/comunidad">Comunidad</a></li>
            </ul>
        </nav>
    );
}
