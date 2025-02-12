import { useState } from 'react';
import Logo from './Logo';

interface NavbarProps {
  hidden?: boolean;
}

export default function Navbar({ hidden = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (hidden) {
    return (
      <nav className="fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center space-x-2">
              <Logo />
            </a>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-[#75d031]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Logo />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#why" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Why AI Avatars</a>
              <a href="#how" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">How to Use</a>
              <a href="#success" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Success Stories</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Portfolio</a>
              <a href="#pricing" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">Pricing</a>
              <a href="#faq" className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">FAQ</a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#why" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Why AI Avatars</a>
          <a href="#how" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">How to Use</a>
          <a href="#success" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Success Stories</a>
          <a href="#portfolio" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Portfolio</a>
          <a href="#pricing" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">Pricing</a>
          <a href="#faq" onClick={closeMenu} className="text-gray-300 hover:text-white hover:bg-[#75d031]/10 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">FAQ</a>
        </div>
      </div>
    </nav>
  );
}