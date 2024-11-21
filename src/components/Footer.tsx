import React from 'react'

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Brew Haven. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="underline">Privacy Policy</a> | 
          <a href="#" className="underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;