import React, { useEffect } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'wouter';

export default function Register() {
  useEffect(() => {
    document.title = "ScorpioAI | Register";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden py-24">
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none"></div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center justify-center gap-2 mb-6">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#A855F7" />
              <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#A855F7" fillOpacity="0.5" />
            </svg>
            <span className="font-bold text-2xl tracking-tight text-white">ScorpioAI</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Create an account</h1>
          <p className="text-gray-400 text-sm">Deploy your AI workforce in minutes.</p>
        </div>

        <GlassCard className="p-8" hoverGlow={false}>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Work Email</label>
              <input 
                type="email" 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Company Name</label>
              <input 
                type="text" 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="Acme Inc"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <input 
                type="password" 
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                placeholder="••••••••"
                required
                minLength={8}
              />
            </div>

            <div className="flex items-start gap-3 mt-6 mb-6">
              <input type="checkbox" id="terms" required className="mt-1 bg-black/40 border-white/10 rounded text-primary focus:ring-primary" />
              <label htmlFor="terms" className="text-xs text-gray-400">
                I agree to the <Link href="/terms" className="text-primary hover:text-white">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:text-white">Privacy Policy</Link>.
              </label>
            </div>
            
            <button type="submit" className="w-full py-3.5 rounded-lg bg-white text-black font-bold hover:scale-[1.02] transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Create Account
            </button>
          </form>
        </GlassCard>

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account? <Link href="/login" className="text-primary hover:text-white transition-colors font-medium">Log in</Link>
        </p>
      </div>
    </div>
  );
}
