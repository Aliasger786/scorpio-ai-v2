import React, { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Mail, Phone, MapPin, MessageSquare, Clock, Headphones } from 'lucide-react';

export default function Contact() {
  useEffect(() => {
    document.title = "ScorpioAI | Contact";
  }, []);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Get In Touch</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">Have questions about deploying AI in your business? Our team is ready to help.</p>
      </section>

      <SectionWrapper variant="default" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Email Us</h4>
                  <p className="text-gray-400 mb-2">Our team responds within 2 hours during business days.</p>
                  <a href="mailto:hello@scorpioai.com" className="text-primary hover:text-white transition-colors">hello@scorpioai.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Call Us</h4>
                  <p className="text-gray-400 mb-2">Mon-Fri from 8am to 5pm PST.</p>
                  <a href="tel:+18005550199" className="text-secondary hover:text-white transition-colors">+1 (800) 555-0199</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Headquarters</h4>
                  <p className="text-gray-400">100 AI Boulevard, Suite 400<br/>San Francisco, CA 94107</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <GlassCard className="p-8 md:p-10" neonBorder hoverGlow={false}>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">First Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" 
                  placeholder="john@company.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Subject</label>
                <select className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none">
                  <option value="sales">Sales Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button className="w-full py-4 rounded-lg bg-primary text-white font-bold hover:scale-[1.02] transition-transform glow-purple">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <GlassCard className="p-8 text-center flex flex-col items-center">
            <MessageSquare className="w-10 h-10 text-primary mb-4" />
            <h4 className="font-bold text-white mb-2">Live Chat</h4>
            <p className="text-sm text-gray-400 mb-4">Chat directly with our support team (or our AI agents) 24/7.</p>
            <button className="text-primary font-semibold hover:text-white transition-colors">Start Chat</button>
          </GlassCard>
          
          <GlassCard className="p-8 text-center flex flex-col items-center">
            <Headphones className="w-10 h-10 text-secondary mb-4" />
            <h4 className="font-bold text-white mb-2">Help Center</h4>
            <p className="text-sm text-gray-400 mb-4">Browse our comprehensive documentation and video tutorials.</p>
            <button className="text-secondary font-semibold hover:text-white transition-colors">Visit Help Center</button>
          </GlassCard>
          
          <GlassCard className="p-8 text-center flex flex-col items-center">
            <Clock className="w-10 h-10 text-white mb-4" />
            <h4 className="font-bold text-white mb-2">Premium Support</h4>
            <p className="text-sm text-gray-400 mb-4">Dedicated account managers for Pro and Enterprise plans.</p>
            <button className="text-white font-semibold hover:text-primary transition-colors">Learn More</button>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
}
