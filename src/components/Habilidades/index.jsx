import React from 'react'
import "./habilidades.css";

export default function HabilidadesComponent() {
    const skillsList = ["JavaScript", "React", "Node.js", "CSS", "HTML", "Git"];

    return (
        <>
            <section id="skills" className="skills">
                <h2>Minhas Habilidades</h2>
                <ul>
                    {skillsList.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}
