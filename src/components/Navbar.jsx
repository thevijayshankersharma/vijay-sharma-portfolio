import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const navItems = [
    { name: 'HOME', href: '#home', suit: '♠' },
    { name: 'ABOUT', href: '#about', suit: '♥' },
    { name: 'SKILLS', href: '#skills', suit: '♣' },
    { name: 'PROJECTS', href: '#projects', suit: '♦' },
    { name: 'CONTACT', href: '#contact', suit: '♠' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="logo">
          PORTFOLIO<span className="logo-dot">.</span>
        </a>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="nav-suit">{item.suit}</span> {item.name}
            </a>
          ))}
          <div className="nav-clock">
            {formatTime(time)}
          </div>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
