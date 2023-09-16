import React from 'react';
import ThemeModeToggle from '../ThemeSwitcher';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="w-full h-20 py-4 px-4 bg-white dark:bg-gray-950 shadow-md dark:shadow-gray-900 flex items-center justify-between">
          <p className="dark:text-white">aytac.me</p>
          <ThemeModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
