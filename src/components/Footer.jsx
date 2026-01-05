import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer section">
            <div className="container footer-content">
                <div className="footer-left">
                    <h3 className="footer-logo">BORDERLAND PORTFOLIO</h3>
                    <p className="footer-text">SYSTEM STANDBY</p>
                </div>

                <div className="footer-right">
                    <p className="copyright">© {currentYear} VIJAY SHARMA. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
