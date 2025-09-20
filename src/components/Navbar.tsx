import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';
import { WishlistIcon } from './WishlistIcon';
import { ThemeToggle } from './ThemeToggle';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, MessageCircle, Mail, ShoppingBag, X } from 'lucide-react';

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
    <nav className="sticky top-0 z-50 p-4 bg-background/30 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-sans">Mmwafrika</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-3">
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
        <div className="flex items-center space-x-2">
          <WishlistIcon />
          <CartIcon />
          <ThemeToggle />
          
          <button className="p-2 rounded-full hover:bg-foreground/10 transition-colors" aria-label="User Account">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="sr-only">User</span>
          </button>
          
          {/* Mobile menu button using Sheet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden p-2 rounded-full hover:bg-foreground/10 transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 sm:max-w-sm bg-white dark:bg-gray-900 border-r border-border p-0 overflow-hidden" style={{ height: '100vh' }}>
              {/* Fixed header with solid background */}
              <SheetHeader className="flex flex-row items-center justify-between p-2 bg-white dark:bg-gray-900 border-b border-border">
                <div className="bg-teal-500/20 rounded-full p-2 hover:bg-teal-500/30 transition-all duration-300 ease-in-out hover:scale-105">
                  <ThemeToggle />
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="p-2 rounded-full hover:bg-foreground/10 transition-all duration-300 ease-in-out hover:scale-110"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Close</span>
                </Button>
              </SheetHeader>
              <div className="flex flex-col h-full py-1 bg-white dark:bg-gray-900 overflow-y-auto max-h-[calc(100vh-40px)]">
                <div className="flex flex-col items-center space-y-1 flex-grow overflow-y-auto w-full max-h-[50vh]">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-xl font-medium text-black dark:text-white hover:text-teal-500 transition-all duration-300 ease-in-out py-1 px-4 rounded-lg w-full text-center font-sans font-bold hover:bg-teal-500/10 hover:scale-[1.02] hover:shadow-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {/* Contact buttons - E-commerce style */}
                <div className="flex flex-col space-y-2 w-full px-4 mt-0 flex-shrink-0">
                  <Button 
                    asChild 
                    className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 transition-all duration-300 ease-in-out text-white font-semibold hover:scale-[1.02] hover:shadow-md"
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
                    className="w-full py-3 rounded-lg border border-border hover:bg-foreground/10 transition-all duration-300 ease-in-out text-foreground font-semibold flex items-center justify-center hover:scale-[1.02] hover:shadow-md"
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
                    className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 transition-all duration-300 ease-in-out text-white font-semibold mt-2 hover:scale-[1.02] hover:shadow-md"
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