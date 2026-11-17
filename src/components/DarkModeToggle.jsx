import React from 'react';

function DarkModeToggle({ darkMode, onToggleDarkMode }) {
  return (
    <button onClick={onToggleDarkMode}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
