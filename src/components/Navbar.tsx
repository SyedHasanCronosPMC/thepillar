import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80; // Approximate navbar height
      const sectionTop = section.offsetTop - navHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Logo inverted={!isScrolled} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                The Pillar
              </span>
              <span className={`text-sm ${
                isScrolled ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Build Smarter, Faster, Better
              </span>
            </div>
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#introduction" isScrolled={isScrolled} onClick={(e) => scrollToSection(e, 'introduction')}>Introduction</NavLink>
            <NavLink href="#solutions" isScrolled={isScrolled} onClick={(e) => scrollToSection(e, 'solutions')}>Solutions</NavLink>
            <NavLink href="#business" isScrolled={isScrolled} onClick={(e) => scrollToSection(e, 'business')}>Business Model</NavLink>
            <NavLink href="#impact" isScrolled={isScrolled} onClick={(e) => scrollToSection(e, 'impact')}>Impact</NavLink>
            <NavLink href="#contact" isScrolled={isScrolled} onClick={(e) => scrollToSection(e, 'contact')}>Contact</NavLink>
          </div>
          
          {/* CTA Button */}
          <button className="relative group">
            <div className="absolute inset-0 bg-blue-600 rounded-lg blur group-hover:blur-md transition-all duration-300" />
            <span className="relative block bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-500 transition-colors">
              Request Demo
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ 
  href, 
  children, 
  isScrolled, 
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  isScrolled: boolean;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative group ${
        isScrolled ? 'text-gray-800' : 'text-white'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
}