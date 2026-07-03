import React from 'react';
import { Link } from 'wouter';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background relative overflow-hidden border-t border-white/5 pt-20 pb-10">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="url(#paint0_linear_footer)" />
                <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="url(#paint1_linear_footer)" />
                <defs>
                  <linearGradient id="paint0_linear_footer" x1="16" y1="2" x2="16" y2="16" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7" />
                    <stop offset="1" stopColor="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_footer" x1="16" y1="9" x2="16" y2="30" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#3B82F6" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-bold text-xl tracking-tight text-white">ScorpioAI</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              AI Employees That Grow Your Business 24/7. Deploy autonomous AI agents that capture leads, recover carts, support buyers, and generate revenue.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="ScorpioAI on Twitter" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="ScorpioAI on LinkedIn" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="ScorpioAI on GitHub" className="text-gray-400 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="ScorpioAI on Facebook" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-3">
              <li><Link href="/features" className="text-gray-400 hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/ai-agents" className="text-gray-400 hover:text-primary transition-colors">AI Agents</Link></li>
              <li><Link href="/solutions" className="text-gray-400 hover:text-primary transition-colors">Solutions</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="text-gray-400 hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/docs" className="text-gray-400 hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-400 hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ScorpioAI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
