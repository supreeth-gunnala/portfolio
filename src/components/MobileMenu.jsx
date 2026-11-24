import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

export default function MobileMenu({ open, close }) {
  // Close on Escape
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  const linkClass = ({ isActive }) => (isActive ? 'active-link' : undefined);

  return (
    <div className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button onClick={close} aria-label="Close navigation menu" style={{ background: 'none', border: 'none', color: 'var(--color-text)', fontSize: '1.5rem', marginBottom: '2rem', cursor: 'pointer' }}>×</button>
      <NavLink to="/" className={linkClass} onClick={close}>Home</NavLink>
      <NavLink to="/about" className={linkClass} onClick={close}>About</NavLink>
      <NavLink to="/experience" className={linkClass} onClick={close}>Experience</NavLink>
      <NavLink to="/projects" className={linkClass} onClick={close}>Projects</NavLink>
      <NavLink to="/skills" className={linkClass} onClick={close}>Skills</NavLink>
      <NavLink to="/achievements" className={linkClass} onClick={close}>Achievements</NavLink>
      <NavLink to="/journey" className={linkClass} onClick={close}>Journey</NavLink>
      <NavLink to="/contact" className={linkClass} onClick={close}>Contact</NavLink>
    </div>
  );
}
