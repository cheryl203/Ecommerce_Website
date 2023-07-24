'use client'
import '@fortawesome/fontawesome-svg-core/styles.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import ProductsSection from './components/ProductsSection';
import Image from 'next/image';
import HamburgerMenu from './components/HamburgerMenu';
const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };
  
  return (
    <div
    >
        <Navbar isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />
      <HamburgerMenu isOpen={isMenuOpen} onToggle={handleMenuToggle} />
       <div className="w-full">
         <Image src="/background1.png" alt="background1" layout="responsive" width={1920} height={1080} />
      </div>
      
      <ProductsSection/>
      
    </div>
  );
};

export default HomePage;
