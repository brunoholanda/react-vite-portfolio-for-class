import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link to="/habilidades">
                            Habilidades
                        </Link>
                    </li>
                    <li>
                        <Link to="/projetos">
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link to="/contato">
                            Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
