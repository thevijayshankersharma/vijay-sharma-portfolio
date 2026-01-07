import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNotification } from './VisaNotification';
import './Contact.css';

const Contact = () => {
    const { showNotification } = useNotification();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        setTimeout(() => {
            // Simulate failure due to no backend
            setStatus('error');

            showNotification('error', 'TRANSMISSION FAILED', 'Backend services are offline. Feature currently unavailable.');

            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="contact section">
            <div className="container contact-container">
                <div className="contact-header" data-aos="fade-up">
                    <h2 className="section-title">GET IN TOUCH</h2>
                    <p className="contact-subtitle">Let's build something together.</p>
                </div>

                <div className="direct-contact" data-aos="fade-right">
                    <div className="contact-channel">
                        <span className="channel-label">EMAIL:</span>
                        <span className="channel-value">vijayshankersharma658@gmail.com</span>
                    </div>
                    <div className="contact-channel">
                        <span className="channel-label">LOCATION:</span>
                        <span className="channel-value">Hyderabad, Telangana</span>
                    </div>
                </div>

                <motion.form
                    className="terminal-form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="form-group">
                        <label className="terminal-label">NAME:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="_"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="terminal-label">EMAIL:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="terminal-input"
                            placeholder="_"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="terminal-label">MESSAGE:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="terminal-input"
                            rows="6"
                            placeholder="_"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary submit-btn">
                        {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT' : 'SEND MESSAGE'}
                    </button>
                </motion.form>

                <div className="contact-socials" data-aos="fade-up">
                    <a href="https://github.com/thevijayshankersharma" target="_blank" rel="noopener noreferrer" className="social-link">GITHUB</a>
                    <a href="https://www.linkedin.com/in/vijay-shanker-sharma/" target="_blank" rel="noopener noreferrer" className="social-link">LINKEDIN</a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
