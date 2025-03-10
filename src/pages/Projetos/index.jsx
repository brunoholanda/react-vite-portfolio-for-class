import "./projetos.css";

export default function Projetos() {
    const projects = [
        { name: "Site da Dentista", link: "https://github.com/seu-usuario/projeto1" },
        { name: "Projeto 2", link: "https://github.com/seu-usuario/projeto2" },
        { name: "Projeto 3", link: "https://github.com/seu-usuario/projeto3" },
    ];

    return (
        <>
          
            <div className="pageBody">
                <div className="main-content">
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
