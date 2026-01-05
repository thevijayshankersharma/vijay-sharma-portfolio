import { useState } from 'react';
import './Skills.css';

const Skills = () => {
    const [activeSuit, setActiveSuit] = useState('clubs'); // Backend focus

    // Suit Mappings:
    // Spades ♠️: Frontend 
    // Clubs ♣️: Backend
    // Diamonds ♦️: Core Concepts & Tools

    const skillSearch = {
        spades: [
            { name: 'React', value: 'A', suit: '♠', type: 'Library' },
            { name: 'JavaScript', value: 'K', suit: '♠', type: 'Language' },
            { name: 'HTML/CSS', value: 'Q', suit: '♠', type: 'Core' },
            { name: 'Hooks', value: 'J', suit: '♠', type: 'Concept' },
        ],
        clubs: [
            { name: 'Java', value: 'A', suit: '♣', type: 'Language' },
            { name: 'Spring Boot', value: 'K', suit: '♣', type: 'Framework' },
            { name: 'Hibernate', value: 'Q', suit: '♣', type: 'ORM' },
            { name: 'REST API', value: 'J', suit: '♣', type: 'Architecture' },
        ],
        diamonds: [
            { name: 'MySQL', value: 'A', suit: '♦', type: 'Database' },
            { name: 'DSA', value: 'K', suit: '♦', type: 'Theory' },
            { name: 'VS Code', value: 'Q', suit: '♦', type: 'Tool' },
            { name: 'OOP', value: 'J', suit: '♦', type: 'Concept' },
        ]
    };

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">TECHNICAL SKILLS</h2>
                    <div className="suit-selector">
                        <button
                            className={`suit-btn ${activeSuit === 'clubs' ? 'active' : ''}`}
                            onClick={() => setActiveSuit('clubs')}
                        >BACKEND</button>
                        <button
                            className={`suit-btn ${activeSuit === 'spades' ? 'active' : ''}`}
                            onClick={() => setActiveSuit('spades')}
                        >FRONTEND</button>
                        <button
                            className={`suit-btn ${activeSuit === 'diamonds' ? 'active' : ''}`}
                            onClick={() => setActiveSuit('diamonds')}
                        >CORE & TOOLS</button>
                    </div>
                </div>

                <div className="card-table">
                    {skillSearch[activeSuit].map((skill, index) => (
                        <div
                            key={skill.name}
                            className={`playing-card ${skill.suit === '♦' ? 'red-suit' : 'black-suit'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="card-corner top-left">
                                <span className="card-value">{skill.value}</span>
                                <span className="card-suit">{skill.suit}</span>
                            </div>

                            <div className="card-center">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-type">{skill.type}</span>
                            </div>

                            <div className="card-corner bottom-right">
                                <span className="card-value">{skill.value}</span>
                                <span className="card-suit">{skill.suit}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
