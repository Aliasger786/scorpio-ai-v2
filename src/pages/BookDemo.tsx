import React, { useEffect, useState } from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Shield, Clock, Video, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "ScorpioAI | Book Demo";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen pb-20 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[120px] rounded-full -z-10 mix-blend-screen pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-3xl relative z-10 w-full">
        {!submitted ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full"
          >
            <div className="text-center mb-10">
              <h1 className="text-4xl md:text-5xl font-black mb-4 text-white">Book Your ScorpioAI Demo</h1>
              <p className="text-gray-400 text-lg">See how autonomous AI agents can scale your revenue ops.</p>
            </div>

            <GlassCard className="p-6 md:p-10" neonBorder hoverGlow={false}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name *</label>
                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Work Email *</label>
                    <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="john@company.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Company Name *</label>
                    <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Acme Inc" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Website URL</label>
                    <input type="url" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="https://..." />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Business Type *</label>
                    <select required className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                      <option value="">Select...</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="service">Service Business</option>
                      <option value="saas">SaaS</option>
                      <option value="agency">Agency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Monthly Lead Volume</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                      <option value="">Select...</option>
                      <option value="<100">&lt; 100</option>
                      <option value="100-500">100 - 500</option>
                      <option value="500-2000">500 - 2,000</option>
                      <option value="2000+">2,000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">What is your biggest revenue challenge?</label>
                  <textarea rows={3} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" placeholder="E.g., Abandoned carts, slow response times..."></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Preferred Date</label>
                    <input type="date" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all [color-scheme:dark]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Preferred Time</label>
                    <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                      <option value="morning">Morning (9am - 12pm)</option>
                      <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg hover:scale-[1.02] transition-transform glow-purple mt-4">
                  Schedule Demo
                </button>
              </form>
            </GlassCard>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Clock size={16} className="text-primary" /> 30-Minute Session
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Shield size={16} className="text-primary" /> No Commitment
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                <Video size={16} className="text-primary" /> Personalized Walkthrough
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full"
          >
            <GlassCard className="p-12 text-center flex flex-col items-center border-green-500/30" hoverGlow={false}>
              <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-6 glow-purple">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Request Received!</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-md mx-auto">
                We've received your demo request. An agent will be in touch shortly to confirm your meeting time.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
              >
                Return Home
              </button>
            </GlassCard>
          </motion.div>
        )}
      </div>
    </div>
  );
}
