import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Community } from './pages/Community';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { ProductDetail } from './pages/ProductDetail';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { Confirmation } from './components/Confirmation';
import { useCart } from './context/CartContext';
import { ThemeProvider } from './components/ThemeProvider';
import { DynamicBackground } from './components/DynamicBackground';
import FileUploadDemo from './pages/FileUploadDemo';
import ButtonShowcase from './pages/ButtonShowcase';
import DigitalHeroDemo from './pages/DigitalHeroDemo';
import DynamicCardDemo from './pages/DynamicCardDemo';
import Settings from './pages/Settings';
import LiquidEtherTest from './pages/LiquidEtherTest';

function ConfirmationWrapper() {
  const { confirmation, hideConfirmation } = useCart();
  
  if (!confirmation || !confirmation.isVisible) {
    return null;
  }
  
  return (
    <Confirmation 
      message={confirmation.message} 
      onClose={hideConfirmation} 
    />
  );
}

function App() {
  return (
    <Router>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <WishlistProvider>
          <CartProvider>
            <DynamicBackground />
            <div className="bg-background text-foreground min-h-screen flex flex-col min-w-full">
              <Navbar />
              <main className="flex-grow min-w-full overflow-x-hidden">
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/community" element={<Community />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/file-upload-demo" element={<FileUploadDemo />} />
                <Route path="/button-showcase" element={<ButtonShowcase />} />
                <Route path="/digital-hero-demo" element={<DigitalHeroDemo />} />
                <Route path="/dynamic-card-demo" element={<DynamicCardDemo />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/liquid-ether-test" element={<LiquidEtherTest />} />
              </Routes>
              </main>
              <Footer />
              <ConfirmationWrapper />
            </div>
          </CartProvider>
        </WishlistProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;