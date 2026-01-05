import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="hero-grid"></div>
            <div className="scanlines"></div>

            <div className="container hero-container">
                <div className="hero-status">
                    <div className="status-item">
                        <span className="status-label">LOCATION</span>
                        <span className="status-value highlight">HYDERABAD</span>
                    </div>
                    <div className="status-item">
                        <span className="status-label">ROLE</span>
                        <span className="status-value">FULL STACK DEV</span>
                    </div>
                    <div className="status-item">
                        <span className="status-label">STATUS</span>
                        <span className="status-value blink">OPEN TO WORK</span>
                    </div>
                </div>

                <div className="hero-content">
                    <h2 className="glitch-text" data-text="PORTFOLIO">PORTFOLIO</h2>

                    <h1 className="hero-title">
                        VIJAY SHANKER <span className="red-text">SHARMA</span>
                    </h1>

                    <p className="hero-description">
                        Java Full Stack Developer with strong knowledge of Core Java, JDBC, MySQL, REST APIs, and React.
                        Eager to apply programming skills to develop scalable applications and solve real-world problems.
                        Contributed to open source via GirlScript Summer of Code.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            VIEW WORK
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            CONTACT ME
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
