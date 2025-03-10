import "./home.css";
import profilePicture from "../../../public/assets/img/perfil.webp";
import HabilidadesComponent from "../../components/Habilidades";

export default function Home() {

    const projects = [
        { name: "Site da Dentista", link: "https://github.com/seu-usuario/projeto1" },
        { name: "Projeto 2", link: "https://github.com/seu-usuario/projeto2" },
        { name: "Projeto 3", link: "https://github.com/seu-usuario/projeto3" },
    ];

    return (
        <>
          
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

                    <HabilidadesComponent />

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

                
            </div>
        </>
    );
}
