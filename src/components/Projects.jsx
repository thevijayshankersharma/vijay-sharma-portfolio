import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: '01',
            title: 'E-Commerce Platform',
            type: 'FULL STACK',
            status: 'Live',
            tech: 'REACT / JAVA / HIBERNATE',
            desc: 'Responsive app with dynamic navigation, reusable components, and optimized database operations using DAO pattern.',
            link: '#'
        },
        {
            id: '02',
            title: 'Bank Management',
            type: 'CORE JAVA',
            status: 'Completed',
            tech: 'JAVA / JDBC / MYSQL',
            desc: 'Secure console app for account management with persistent storage, input validation, and exception handling.',
            link: '#'
        },
        {
            id: '03',
            title: 'Portfolio Website',
            type: 'FRONTEND',
            status: 'Active',
            tech: 'REACT / VITE',
            desc: 'Modern responsive portfolio with industrial cyberpunk UI/UX.',
            link: '#'
        }
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">PROJECTS</h2>
                    <p className="section-subtitle">SELECTED WORKS</p>
                </div>

                <div className="stages-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="stage-card">
                            <div className="stage-header">
                                <span className="stage-id">{project.id}</span>
                                <span className="stage-difficulty">{project.type}</span>
                            </div>

                            <div className="stage-content">
                                <div className="stage-overlay"></div>
                                <h3 className="stage-title">{project.title}</h3>
                                <div className="stage-divider"></div>
                                <p className="stage-desc">{project.desc}</p>
                                <p className="stage-tech">{project.tech}</p>
                            </div>

                            <div className="stage-footer">
                                <span className="stage-type">{project.type}</span>
                                <span className="stage-status">{project.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
