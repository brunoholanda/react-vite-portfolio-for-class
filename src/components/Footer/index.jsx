import React from 'react'
import "./footer.css";

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <p>📞 Telefone: (00) 12345-6789</p>
            <p>📧 Email: seuemail@email.com</p>
            <div className="social-icons">
                <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
            </div>
        </footer>
    )
}
