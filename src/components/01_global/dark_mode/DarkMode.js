import React, { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      console.log('dark');
    } else {
      setTheme('light');
      console.log('light');
    }
  };

  return (
    <div>
      <i
        className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}
        onClick={toggleTheme}
        style={{ color: '#888' }}
      ></i>
    </div>
  );
}

export default DarkMode;
