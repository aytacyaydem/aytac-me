'use client';
import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

const ThemeSwitchButton = () => {
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(() => {
    const htmlElement = document.querySelector('html');
    return htmlElement?.classList.contains('dark') ? 'dark' : 'light';
  });

  // Watching for theme change in DOM and update state according to html class list change
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;

    const observer = new MutationObserver((mutationsList) => {
      mutationsList.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const newTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
          setCurrentTheme(newTheme);
        }
      });
    });

    observer.observe(htmlElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChangeTheme = () => {
    const htmlElement = document.querySelector('html');
    if (!htmlElement) return;

    if (currentTheme === 'light') {
      htmlElement.classList.remove('light');
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.classList.add('light');
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={handleChangeTheme}>
      {currentTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default ThemeSwitchButton;
