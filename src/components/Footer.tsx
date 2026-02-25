import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-center py-10 border-t border-gray-800">
      <p className="text-gray-400 text-lg">
        &copy; {currentYear} - Justin Bornais - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
