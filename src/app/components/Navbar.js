import React from 'react';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <nav className="bg-white shadow-lg flex items-center justify-between px-4 py-3">
      <div>
        <img src= "/nike.png" alt="Nike logo" style={{height:'70px', width:'auto'}} className="h-8" />
      </div>
      <div className="flex items-center space-x-4">
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Men
        </a>
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Women
        </a>
        <a href="#" className="text-black font-semibold transition-colors duration-300 hover:text-gray-500">
          Accessories
        </a>
      </div>
        <div>
         <a href="#"  style={{marginRight:'1px'}} className="text-black transition-colors duration-300 hover:text-gray-500" >
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
          </a>
      </div>
      
      <div>
         <a href="#" className="text-black transition-colors duration-300 hover:text-gray-500" onClick={onMenuToggle}>
          <FontAwesomeIcon icon={faBars} size="lg" />
          </a>
      </div>
    </nav>
  );
};

export default Navbar;
