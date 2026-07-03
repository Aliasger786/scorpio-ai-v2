import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'wouter';

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  useEffect(() => {
    document.title = "ScorpioAI | Pricing";
  }, []);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">Only pay for the capacity you need. Scale your AI workforce infinitely.</p>
        
        <div className="flex items-center justify-center gap-4">
          <span className={`text-lg font-medium ${!annual ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-16 h-8 rounded-full bg-white/10 relative flex items-center px-1 transition-colors hover:bg-white/20"
          >
            <div className={`w-6 h-6 rounded-full bg-primary transition-transform ${annual ? 'translate-x-8' : ''}`} />
          </button>
          <span className={`text-lg font-medium flex items-center gap-2 ${annual ? 'text-white' : 'text-gray-500'}`}>
            Annual <Badge variant="green" className="text-xs px-2 py-0.5 animate-pulse">Save 20%</Badge>
          </span>
        </div>
      </section>

      <SectionWrapper className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {/* Starter */}
          <GlassCard className="flex flex-col p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-black text-white mb-2">${annual ? '79' : '99'}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            {annual && <div className="text-sm text-primary mb-6">Billed $948 yearly</div>}
            {!annual && <div className="text-sm text-transparent mb-6">Spacer</div>}
            
            <p className="text-gray-400 text-sm mb-8">Perfect for small businesses testing the waters with AI.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> 3 AI Agents</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> 1,000 Conversations/mo</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Email Support</li>
              <li className="flex items-center gap-3 text-gray-500"><X size={18} /> Advanced Analytics</li>
              <li className="flex items-center gap-3 text-gray-500"><X size={18} /> Custom Integrations</li>
            </ul>
            <Link href="/register" className="w-full py-4 rounded-lg border border-white/20 text-center text-white font-bold hover:bg-white/10 transition-colors">Start Free Trial</Link>
          </GlassCard>

          {/* Pro */}
          <GlassCard className="flex flex-col p-8 transform lg:-translate-y-4" neonBorder>
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-bl-lg">MOST POPULAR</div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-black text-white mb-2">${annual ? '159' : '199'}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            {annual && <div className="text-sm text-primary mb-6">Billed $1,908 yearly</div>}
            {!annual && <div className="text-sm text-transparent mb-6">Spacer</div>}
            
            <p className="text-gray-400 text-sm mb-8">For growing businesses that need full revenue ops automation.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 size={18} className="text-primary" /> 7 AI Agents</li>
              <li className="flex items-center gap-3 text-white font-medium"><CheckCircle2 size={18} className="text-primary" /> 5,000 Conversations/mo</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Priority Support</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Advanced Analytics</li>
              <li className="flex items-center gap-3 text-gray-500"><X size={18} /> White-labeling</li>
            </ul>
            <Link href="/register" className="w-full py-4 rounded-lg bg-primary text-white text-center font-bold hover:scale-105 transition-transform glow-purple">Get Started</Link>
          </GlassCard>

          {/* Premium */}
          <GlassCard className="flex flex-col p-8">
            <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
            <div className="text-4xl font-black text-white mb-2">${annual ? '239' : '299'}<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            {annual && <div className="text-sm text-primary mb-6">Billed $2,868 yearly</div>}
            {!annual && <div className="text-sm text-transparent mb-6">Spacer</div>}
            
            <p className="text-gray-400 text-sm mb-8">Uncapped access to the entire ScorpioAI agent workforce.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 size={18} className="text-primary" /> All 12 AI Agents</li>
              <li className="flex items-center gap-3 text-white font-bold"><CheckCircle2 size={18} className="text-primary" /> Unlimited Conversations</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> 24/7 Dedicated Support</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Custom Workflows</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> White-labeling</li>
            </ul>
            <Link href="/register" className="w-full py-4 rounded-lg border border-white/20 text-center text-white font-bold hover:bg-white/10 transition-colors">Start Free Trial</Link>
          </GlassCard>

          {/* Enterprise */}
          <GlassCard className="flex flex-col p-8 bg-white/5">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <div className="text-4xl font-black text-white mb-2">Custom</div>
            <div className="text-sm text-gray-500 mb-6">Tailored to your scale</div>
            
            <p className="text-gray-400 text-sm mb-8">For high-volume operations requiring custom infrastructure.</p>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Custom AI Training</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Dedicated Account Manager</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> On-Premise Deployment</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> 99.99% Uptime SLA</li>
              <li className="flex items-center gap-3 text-white"><CheckCircle2 size={18} className="text-primary" /> Security Audits</li>
            </ul>
            <Link href="/contact" className="w-full py-4 rounded-lg bg-white text-black text-center font-bold hover:bg-gray-200 transition-colors">Contact Sales</Link>
          </GlassCard>
        </div>
      </SectionWrapper>
    </div>
  );
}
