import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';
import { WishlistIcon } from './WishlistIcon';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, MessageCircle, Mail, ShoppingBag } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <nav className="sticky top-0 z-50 p-4 bg-black/30 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-sans">Mmwafrika</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="hover:text-teal-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Cart and User Icons */}
        <div className="flex items-center space-x-4">
          <WishlistIcon />
          <CartIcon />
          
          <button className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="User Account">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="sr-only">User</span>
          </button>
          
          {/* Mobile menu button using Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 sm:max-w-sm bg-black border-r border-white/20">
              <SheetHeader>
                <SheetTitle className="text-white">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col items-center justify-between h-full py-8">
                <div className="flex flex-col items-center space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-xl font-medium text-white hover:text-teal-500 transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Contact buttons - E-commerce style */}
                <div className="flex flex-col space-y-3 w-full px-4">
                  <Button 
                    asChild 
                    className="w-full py-4 rounded-lg bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold"
                  >
                    <a 
                      href="https://wa.me/27790427032" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      +27 79 042 7032
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full py-4 rounded-lg border border-white/20 hover:bg-white/10 transition-colors text-white font-semibold flex items-center justify-center"
                  >
                    <a 
                      href="mailto:mmwafrika.prideclothing@gmail.com" 
                      className="flex items-center"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      <span className="truncate">mmwafrika.prideclothing@gmail.com</span>
                    </a>
                  </Button>
                  
                  <Button 
                    asChild 
                    className="w-full py-4 rounded-lg bg-teal-600 hover:bg-teal-700 transition-colors text-white font-semibold mt-2"
                  >
                    <a 
                      href="https://wa.me/27790427032" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Order via WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}