import React from 'react';
import { Building2, Brain, BarChart3, Clock, FileCheck, Users2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import WhyChooseUs from './components/WhyChooseUs';
import BusinessModel from './components/BusinessModel';
import Impact from './components/Impact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <WhyChooseUs />
        <BusinessModel />
        <Impact />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">© 2025 The Pillar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;