import React from 'react';
import './HamburgerMenu.css'
const HamburgerMenu = ({ isOpen, onToggle }) => {
  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <>
          <div className="menu-item">Like</div>
          <div className="menu-item">My Cart</div>
          <div className="menu-item">Proceed to Pay</div>
         
        </>
      )}
    </div>
  );
};

export default HamburgerMenu;
