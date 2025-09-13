import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Community } from './pages/Community';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;