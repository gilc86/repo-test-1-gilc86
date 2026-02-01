import React, { useState } from 'react';
import { SidebarProps } from './Sidebar.types';

/**
 * Sidebar Component
 * A responsive sidebar with menu items.
 */
const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* Mobile menu button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Open sidebar"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-gray-100 border-r border-gray-200 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:sticky md:top-0 z-10`}
      >
        <div className="p-4">
          <h1 className="text-lg font-semibold">Dobby AI</h1>
        </div>
        <nav className="py-4">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id} className="hover:bg-gray-200">
                <a href={item.href} className="block p-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Close button for mobile */}
        <button
          onClick={toggleSidebar}
          className="md:hidden absolute top-2 right-2 p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          aria-label="Close sidebar"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;