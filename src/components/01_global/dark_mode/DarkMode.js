import React, { useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  if (darkMode) {
    console.log('darkMode: ', darkMode);
  } else {
    console.log('darkMode: ', darkMode);
  }

  return (
    <div>
      <i
        className={darkMode ? 'fas fa-moon' : 'fas fa-sun'}
        onClick={toggleDarkMode}
        style={{ color: '#888' }}
      ></i>
    </div>
  );
}

export default DarkMode;
