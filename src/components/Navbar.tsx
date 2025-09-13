import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 p-4 bg-black/30 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-sans">Mmwafrika</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-teal-500 transition-colors">Home</Link>
          <Link to="/shop" className="hover:text-teal-500 transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-teal-500 transition-colors">Collections</Link>
          <Link to="/about" className="hover:text-teal-500 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-teal-500 transition-colors">Contact</Link>
          <Link to="/community" className="hover:text-teal-500 transition-colors">Community</Link>
        </div>
        
        {/* Cart and User Icons */}
        <div className="flex items-center space-x-4">
          <button id="cart-button" className="p-2 rounded-full hover:bg-white/10 transition-colors relative" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="sr-only">Cart</span>
            {/* Item count badge */}
            <span id="cart-count" className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
          </button>
          
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="User Account">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="sr-only">User</span>
          </button>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors" 
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/collections" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Collections</Link>
            <Link to="/about" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/community" className="hover:text-teal-500 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Community</Link>
          </div>
        </div>
      )}
    </nav>
  );
}