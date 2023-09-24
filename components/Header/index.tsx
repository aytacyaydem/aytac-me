import React from 'react';
import ThemeModeToggle from '../ThemeSwitcher';
import Link from 'next/link';

const links = [
  {
    name: 'Hakkımda',
    href: '/',
  },
  {
    name: 'Yazılar',
    href: '/posts',
  },
  {
    name: 'Yer İmleri',
    href: '/bookmarks',
  },
];

const Header = () => {
  return (
    <header>
      <nav className="w-full shadow-md dark:shadow-gray-900">
        <div className="container">
          <div className="h-20 flex items-center justify-between">
            <ul>
              {links.map((link) => (
                <li key={link.href} className="inline-block mr-4">
                  <Link
                    href={link.href}
                    className="text-black dark:text-white hover:text-black/80 dark:hover:text-white/80"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ThemeModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
