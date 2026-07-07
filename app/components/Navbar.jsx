"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Training', href: '/training' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      {/* 1. BLURRY BACKDROP OVERLAY */}
      {/* This div appears only when isOpen is true. It blurs the content behind it. */}
      <div 
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicking the blurred area
      />

      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0 font-bold text-2xl text-blue-900 tracking-tighter">
              <Link href="/">
                INFOSIV<span className="text-blue-500">.</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-blue-200"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-blue-600 p-2 transition-colors z-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* 2. MOBILE SIDEBAR MENU */}
        <div 
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-6 p-8 pt-24">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white text-center px-6 py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}