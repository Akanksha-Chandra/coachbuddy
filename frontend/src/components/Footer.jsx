import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-12 text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Interview Coach. All rights reserved.
    </footer>
  );
};

export default Footer;
