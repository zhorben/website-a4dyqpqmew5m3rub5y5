import React from 'react'
import { Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

import React from 'react';
import { Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-amber-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Coffee className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">Brew Haven</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><Button variant="outline">Order Online</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;