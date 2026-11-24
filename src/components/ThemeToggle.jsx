import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') ?? 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <button
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      style={{
        background: 'none',
        border: 'none',
        padding: '0.5rem',
        marginLeft: '1rem',
        cursor: 'pointer',
        color: 'var(--color-text)'
      }}
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-primary)" viewBox="0 0 24 24">
          <path d="M12 4.5V2m0 20v-2.5M5.636 5.636l-1.768-1.768M20.132 20.132l-1.768-1.768M4.5 12H2m20 0h-2.5M5.636 18.364l-1.768 1.768M20.132 3.868l-1.768 1.768M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="var(--color-primary)" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
}
