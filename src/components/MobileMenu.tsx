import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Home,
  ShoppingCart,
  Package,
  User,
  Mail,
  Users,
  MessageCircle,
  ShoppingBag,
  Menu,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="p-1.5 rounded-full hover:bg-foreground/10 transition-all duration-300 hover:scale-110 hover:shadow-lg dark:hover:shadow-teal-500/20 lg:hidden"
        >
          <Menu className="h-4 w-4" />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 landscape:w-72 rounded-xl shadow-2xl border border-border bg-white dark:bg-gray-900" align="start" sideOffset={8}>
        <ScrollArea className="h-[300px] landscape:h-[calc(100vh-200px)]">
          {/* Navigation Section */}
          <DropdownMenuLabel className="text-black dark:text-white font-semibold py-2">
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link to="/" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <Home className="h-4 w-4 mr-3" />
                <span className="font-medium">Home</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/shop" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <ShoppingCart className="h-4 w-4 mr-3" />
                <span className="font-medium">Shop</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/collections" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <Package className="h-4 w-4 mr-3" />
                <span className="font-medium">Collections</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/about" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <User className="h-4 w-4 mr-3" />
                <span className="font-medium">About</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/contact" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <Mail className="h-4 w-4 mr-3" />
                <span className="font-medium">Contact</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/community" className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white">
                <Users className="h-4 w-4 mr-3" />
                <span className="font-medium">Community</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          {/* Contact Section */}
          <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
          <DropdownMenuLabel className="text-black dark:text-white font-semibold py-2">
            Contact Us
          </DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <a 
                href="https://wa.me/27790427032" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
              >
                <MessageCircle className="h-4 w-4 mr-3 text-green-600" />
                <span className="font-medium">+27 79 042 7032</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="mailto:mmwafrika.prideclothing@gmail.com"
                className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
              >
                <Mail className="h-4 w-4 mr-3" />
                <span className="font-medium truncate">mmwafrika.prideclothing@gmail.com</span>
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a 
                href="https://wa.me/27790427032" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center py-2 px-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-black dark:text-white"
              >
                <ShoppingBag className="h-4 w-4 mr-3 text-teal-600" />
                <span className="font-medium">Order via WhatsApp</span>
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </ScrollArea>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}