"use client";

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import NdiokwuText from '@/components/NdiokwuText';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-3xl font-bold"><NdiokwuText>Ndịokwu</NdiokwuText></span>
          <span className="text-xl font-medium">Ndịokwu</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-purple-200 transition-colors">
            Home
          </Link>
          <Link href="/learn" className="hover:text-purple-200 transition-colors">
            Learn
          </Link>
          <Link href="/alphabet" className="hover:text-purple-200 transition-colors">
            Alphabet
          </Link>
          <Link href="/practice" className="hover:text-purple-200 transition-colors">
            Practice
          </Link>
          <Link href="/converter" className="hover:text-purple-200 transition-colors">
            Converter
          </Link>
          <Link href="/why" className="hover:text-purple-200 transition-colors">
            Why Ndịokwu
          </Link>
          <Link href="/about" className="hover:text-purple-200 transition-colors">
            About
          </Link>
        </nav>

        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-indigo-900 px-6 py-4 mt-2"
        >
          <div className="flex flex-col space-y-4">
            <Link 
              href="/" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              href="/learn" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Learn
            </Link>
            <Link 
              href="/alphabet" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Alphabet
            </Link>
            <Link 
              href="/practice" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Practice
            </Link>
            <Link 
              href="/converter" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Converter
            </Link>
            <Link 
              href="/why" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              Why Ndịokwu
            </Link>
            <Link 
              href="/about" 
              className="hover:text-purple-200 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 