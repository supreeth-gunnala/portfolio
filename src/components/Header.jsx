import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle.jsx';
import MobileMenu from './MobileMenu.jsx';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const linkClass = ({ isActive }) => (isActive ? 'active-link' : undefined);

  return (
    <header>
      <div className="flex-center">
        <NavLink to="/" className="logo" style={{ fontWeight: 600, fontSize: '1.2rem', color: 'var(--color-primary)' }}>
          Supreeth Reddy
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/experience" className={linkClass}>Experience</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/skills" className={linkClass}>Skills</NavLink>
        <NavLink to="/achievements" className={linkClass}>Achievements</NavLink>
        <NavLink to="/journey" className={linkClass}>Journey</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
      <button className="menu-toggle" aria-label="Open navigation menu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="var(--color-text)" viewBox="0 0 24 24"><path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
      </button>
      <MobileMenu open={menuOpen} close={closeMenu} />
      <ThemeToggle />
    </header>
  );
}
