import React from 'react';

type ThemeToggleProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, setIsDarkMode }) => {
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <label className="theme-toggle">
      <input type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <span className="slider"></span>
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </label>
  );
};

export default ThemeToggle;
