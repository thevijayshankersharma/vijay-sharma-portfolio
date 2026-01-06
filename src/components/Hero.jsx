import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="home" className="hero section">
            <div className="hero-grid"></div>
            <div className="scanlines"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-status"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
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
                </motion.div>

                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="glitch-wrapper" variants={itemVariants}>
                        <h2 className="glitch-text" data-text="PORTFOLIO">PORTFOLIO</h2>
                    </motion.div>

                    <motion.h1 className="hero-title" variants={itemVariants}>
                        VIJAY SHANKER <span className="red-text">SHARMA</span>
                    </motion.h1>

                    <motion.p className="hero-description" variants={itemVariants}>
                        Java Full Stack Developer with strong knowledge of Core Java, JDBC, MySQL, REST APIs, and React.
                        Eager to apply programming skills to develop scalable applications and solve real-world problems.
                        Contributed to open source via GirlScript Summer of Code.
                    </motion.p>

                    <motion.div className="hero-cta" variants={itemVariants}>
                        <a href="#projects" className="btn btn-primary">
                            VIEW WORK
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            CONTACT ME
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
