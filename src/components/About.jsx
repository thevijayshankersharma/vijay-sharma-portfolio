import profileImg from '../assets/profile_custom.png';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="about-grid">
                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="profile-frame">
                            <div className="profile-image-container">
                                <img src={profileImg} alt="Vijay Sharma" className="profile-image" />
                            </div>
                            <div className="frame-corner top-left"></div>
                            <div className="frame-corner top-right"></div>
                            <div className="frame-corner bottom-left"></div>
                            <div className="frame-corner bottom-right"></div>
                        </div>
                    </motion.div>

                    <div className="about-content">
                        <h2 className="section-title" data-aos="fade-right">ABOUT ME</h2>

                        <motion.div
                            className="bio-block"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="console-text">
                                NAME: VIJAY SHANKER SHARMA<br />
                                LOCATION: HYDERABAD, TELANGANA<br />
                                ROLE: JAVA FULL STACK DEVELOPER<br /><br />
                                OBJECTIVE: Develop scalable and maintainable applications. Integrate frontend and backend systems. Solve real-world problems.
                            </p>
                        </motion.div>

                        <div className="info-grid">
                            <div className="info-column" data-aos="fade-up" data-aos-delay="300">
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

                            <div className="info-column" data-aos="fade-up" data-aos-delay="400">
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

                        <div className="about-actions" data-aos="fade-up" data-aos-delay="500">
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
