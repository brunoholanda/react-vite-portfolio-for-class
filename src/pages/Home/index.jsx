import "./home.css";
import profilePicture from "../../../public/assets/img/perfil.webp";

export default function Home() {
    const skillsList = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Git"];
    const projects = [
        { name: "Projeto 1", link: "https://github.com/seu-usuario/projeto1" },
        { name: "Projeto 2", link: "https://github.com/seu-usuario/projeto2" },
        { name: "Projeto 3", link: "https://github.com/seu-usuario/projeto3" },
    ];

    return (
        <>
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="#about">Início</a></li>
                        <li><a href="#skills">Habilidades</a></li>
                        <li><a href="#projects">Projetos</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                </nav>
            </header>
            <div className="pageBody">
                <div className="main-content">
                    <section id="about" className="about">
                        <div className="about-content">
                            <div className="text">
                                <h1>Bruno Holanda</h1>
                                <p>Sou um desenvolvedor apaixonado por tecnologia e inovação.</p>
                                <a href="../../../public/assets/pdf/curriculo.pdf" download className="btn">📄 Baixar Currículo</a>
                            </div>
                            <img src={profilePicture} alt="Foto pessoal" className="profile-pic" />
                        </div>
                    </section>

                    <section id="skills" className="skills">
                        <h2>Minhas Habilidades</h2>
                        <ul>
                            {skillsList.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </section>

                    <section id="projects" className="projects">
                        <h2>Meus Projetos</h2>
                        <div className="projects-container">
                            {projects.map((project, index) => (
                                <div key={index} className="project-card">
                                    <h3>{project.name}</h3>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 Ver no GitHub</a>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <footer id="contact" className="footer">
                    <p>📞 Telefone: (00) 12345-6789</p>
                    <p>📧 Email: seuemail@email.com</p>
                    <div className="social-icons">
                        <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">🔗 LinkedIn</a>
                        <a href="https://github.com/seu-usuario" target="_blank" rel="noopener noreferrer">🐙 GitHub</a>
                    </div>
                </footer>
            </div>
        </>
    );
}
