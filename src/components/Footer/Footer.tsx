import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 text-center text-gray-500">
      <p>&copy; {currentYear} Dobby AI Platform. All rights reserved.</p>
    </footer>
  );
};

export default Footer;