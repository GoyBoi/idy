import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';
import { WishlistIcon } from './WishlistIcon';
import { ThemeToggle } from './ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="sticky top-0 z-50 h-12 bg-background/30 backdrop-blur-md border-b border-border">
      <div className="px-4 flex justify-between items-center h-full">
        {/* Logo */}
        <Link to="/" className="text-lg font-bold font-sans h-5 flex items-center">Mmwafrika</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-sm hover:text-teal-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/settings" 
              className="text-sm hover:text-teal-500 transition-colors"
            >
              Settings
            </Link>
          </div>
        </div>
        
        {/* Cart and User Icons */}
        <div className="flex items-center gap-2">
          <WishlistIcon />
          <CartIcon />
          <ThemeToggle />
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="p-1.5 rounded-full hover:bg-foreground/10 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:hover:shadow-teal-500/20"
            aria-label="User Account"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="sr-only">User</span>
          </Button>
          
          {/* Mobile menu using Dropdown */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}