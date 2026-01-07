import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const [activeSuit, setActiveSuit] = useState('clubs');

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
        ],
        hearts: [
            { name: 'Teamwork', value: 'A', suit: '♥', type: 'Soft Skill' },
            { name: 'Problem Solving', value: 'K', suit: '♥', type: 'Soft Skill' },
            { name: 'Communication', value: 'Q', suit: '♥', type: 'Soft Skill' },
            { name: 'Adaptability', value: 'J', suit: '♥', type: 'Soft Skill' },
        ]
    };

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
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
                        <button
                            className={`suit-btn ${activeSuit === 'hearts' ? 'active' : ''}`}
                            onClick={() => setActiveSuit('hearts')}
                        >SOFT SKILLS</button>
                    </div>
                </div>

                <motion.div
                    className="card-table"
                    layout
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSuit}
                            className="card-grid-inner"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {skillSearch[activeSuit].map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className={`playing-card ${['♦', '♥'].includes(skill.suit) ? 'red-suit' : 'black-suit'}`}
                                    whileHover={{
                                        y: -15,
                                        rotateZ: index % 2 === 0 ? 3 : -3,
                                        scale: 1.05,
                                        boxShadow: "0 15px 40px rgba(255, 0, 51, 0.4)",
                                        transition: { type: "spring", stiffness: 300, damping: 20 }
                                    }}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.05, type: "spring", stiffness: 200 }}
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
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
