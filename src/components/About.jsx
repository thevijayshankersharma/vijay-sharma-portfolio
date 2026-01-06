import profileImg from '../assets/profile_custom.png';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="profile-frame">
                            <div className="profile-image-container">
                                <img src={profileImg} alt="Vijay Sharma" className="profile-image" />
                            </div>
                            <div className="frame-corner top-left"></div>
                            <div className="frame-corner top-right"></div>
                            <div className="frame-corner bottom-left"></div>
                            <div className="frame-corner bottom-right"></div>
                        </div>
                    </div>

                    <div className="about-content">
                        <h2 className="section-title">ABOUT ME</h2>

                        <div className="bio-block">
                            <p className="console-text">
                                NAME: VIJAY SHANKER SHARMA<br />
                                LOCATION: HYDERABAD, TELANGANA<br />
                                ROLE: JAVA FULL STACK DEVELOPER<br /><br />
                                OBJECTIVE: Develop scalable and maintainable applications. Integrate frontend and backend systems. Solve real-world problems.
                            </p>
                        </div>

                        <div className="info-grid">
                            <div className="info-column">
                                <h3 className="info-title">EDUCATION</h3>
                                <div className="log-entry">
                                    <span className="log-date">2022 - 2025</span>
                                    <span className="log-title">B.Tech, CSE</span>
                                    <span className="log-desc">Mahaveer Institute of Science & Technology (70%)</span>
                                </div>
                                <div className="log-entry">
                                    <span className="log-date">2019 - 2022</span>
                                    <span className="log-title">Diploma, CSE</span>
                                    <span className="log-desc">Quli Qutub Shah Govt. Polytechnic (82%)</span>
                                </div>
                            </div>

                            <div className="info-column">
                                <h3 className="info-title">CERTIFICATIONS & AWARDS</h3>
                                <ul className="trophy-list">
                                    <li> Certified Java Full Stack Developer (QSpiders)</li>
                                    <li> GirlScript Summer of Code Contributor</li>
                                    <li> Runner-up, Techno Mist Hackathon (50+ Teams)</li>
                                    <li> Runner-up, Abacus IT Quiz (450+ Teams)</li>
                                    <li> 1st Rank (5th Sem) Merit Certificate</li>
                                </ul>
                            </div>
                        </div>

                        <div className="about-actions">
                            <a href="#contact" className="btn btn-primary">
                                CONTACT ME
                            </a>
                            <a href="/resume.pdf" download="Vijay_Sharma_Resume.pdf" className="btn btn-secondary">
                                DOWNLOAD RESUME
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
