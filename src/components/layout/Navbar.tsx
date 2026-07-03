import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/features', label: 'Features' },
    { href: '/ai-agents', label: 'AI Agents' },
    { href: '/solutions', label: 'Solutions' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/integrations', label: 'Integrations' },
    { href: '/about', label: 'About' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass border-b border-white/5 py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="url(#paint0_linear)" />
            <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="url(#paint1_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
              <linearGradient id="paint1_linear" x1="16" y1="9" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A855F7" stopOpacity="0.8" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-bold text-xl tracking-tight text-white">ScorpioAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <Link 
              key={link.href} 
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-gray-300"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link 
            href="/book-demo" 
            className="text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg glow-purple hover:scale-105 transition-all"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 glass-strong border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
            >
              {links.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium p-2 rounded-md transition-colors",
                    location === link.href ? "text-primary bg-primary/10" : "text-gray-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link 
                href="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium p-2 text-gray-300"
              >
                Login
              </Link>
              <Link 
                href="/book-demo" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium bg-primary text-center text-primary-foreground px-4 py-3 rounded-lg mt-2"
              >
                Book Demo
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
