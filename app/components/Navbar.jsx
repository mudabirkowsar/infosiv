"use client";
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 font-bold text-2xl text-blue-900 tracking-tighter">
            INFOSIV<span className="text-blue-500">.</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-blue-600 font-medium">Services</Link>
            <Link href="/tranning" className="text-gray-700 hover:text-blue-600 font-medium">Training</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition shadow-lg">
              Contact Us
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
      </div>
    </nav>
  );
}