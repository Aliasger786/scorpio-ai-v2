import React, { useEffect, useRef, Component } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  Bot, Share2, MessageCircle, ShoppingBag, ShoppingCart, 
  Headphones, RefreshCw, Star, Megaphone, BarChart2, 
  Package, Target, ArrowDown, Users, Clock, TrendingUp, CheckCircle2
} from 'lucide-react';

import { GlassCard } from '@/components/ui/GlassCard';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

// CSS-based animated hero background (WebGL-free fallback / primary)
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Deep space gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a14] via-[#050510] to-[#0a0514]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(139,92,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Large glowing orb — pure CSS */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(56,189,248,0.10) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Floating CSS particles */}
      {Array.from({ length: 40 }).map((_, i) => {
        const size = 2 + (i % 3);
        const left = `${(i * 23 + 7) % 100}%`;
        const top = `${(i * 31 + 13) % 100}%`;
        const delay = (i * 0.3) % 6;
        const dur = 4 + (i % 5);
        return (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              left,
              top,
              background: i % 2 === 0 ? 'rgba(139,92,246,0.6)' : 'rgba(56,189,248,0.5)',
              boxShadow: `0 0 ${size * 3}px ${i % 2 === 0 ? 'rgba(139,92,246,0.8)' : 'rgba(56,189,248,0.7)'}`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        );
      })}

      {/* Secondary orb — blue */}
      <motion.div
        className="absolute right-[10%] top-[20%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "ScorpioAI | AI Revenue Operating System";
    
    // GSAP Animation for Hero Heading
    gsap.fromTo(
      ".hero-word",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const agents = [
    { icon: <Bot className="text-primary w-6 h-6" />, name: "AI Sales Agent", desc: "Qualifies leads and closes deals automatically" },
    { icon: <Share2 className="text-secondary w-6 h-6" />, name: "AI Social Lead Gen Agent", desc: "Finds and captures leads across social platforms" },
    { icon: <MessageCircle className="text-primary w-6 h-6" />, name: "AI DM Agent", desc: "Engages prospects in personalized direct conversations" },
    { icon: <ShoppingBag className="text-secondary w-6 h-6" />, name: "AI Product Recommendation", desc: "Suggests the right products to the right buyers" },
    { icon: <ShoppingCart className="text-primary w-6 h-6" />, name: "AI Cart Recovery Agent", desc: "Recovers abandoned carts with smart follow-ups" },
    { icon: <Headphones className="text-secondary w-6 h-6" />, name: "AI Customer Support Agent", desc: "Resolves support tickets instantly, 24/7" },
    { icon: <RefreshCw className="text-primary w-6 h-6" />, name: "AI Follow-up Agent", desc: "Never lets a lead go cold with automated sequences" },
    { icon: <Star className="text-secondary w-6 h-6" />, name: "AI Review Agent", desc: "Collects and responds to customer reviews automatically" },
    { icon: <Megaphone className="text-primary w-6 h-6" />, name: "AI Marketing Agent", desc: "Generates and schedules marketing content at scale" },
    { icon: <BarChart2 className="text-secondary w-6 h-6" />, name: "AI Analytics Agent", desc: "Surfaces insights and revenue opportunities in real-time" },
    { icon: <Package className="text-primary w-6 h-6" />, name: "AI Inventory Agent", desc: "Monitors stock levels and triggers reorder workflows" },
    { icon: <Target className="text-secondary w-6 h-6" />, name: "AI Competitor Intelligence", desc: "Tracks competitor pricing and market positioning" },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: 3D Hero */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <HeroBackground />
        
        <div className="container relative z-10 mx-auto px-4 text-center flex flex-col items-center">
          <Badge variant="purple" className="mb-6 animate-fade-in text-sm px-4 py-1.5 border-primary/50 bg-primary/10">
            ScorpioAI Platform v2.0 is live
          </Badge>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 max-w-5xl leading-[1.1]">
            {"AI Employees That Grow Your Business 24/7".split(" ").map((word, i) => (
              <span key={i} className="inline-block overflow-hidden pb-2 mr-4 md:mr-6">
                <span className="hero-word inline-block gradient-text">{word}</span>
              </span>
            ))}
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-10 font-light"
          >
            ScorpioAI deploys autonomous AI agents that capture leads, recover carts, support customers, and generate revenue — around the clock, without a team.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 mb-16"
          >
            <Link href="/book-demo" className="px-8 py-4 rounded-lg bg-primary text-white font-bold text-lg hover:scale-105 transition-transform glow-purple flex items-center justify-center gap-2">
              Book a Demo
            </Link>
            <Link href="/ai-agents" className="px-8 py-4 rounded-lg glass text-white font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2 border border-primary/30">
              Explore AI Agents
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest font-semibold">Trusted by 500+ businesses</p>
            <div className="flex gap-6 opacity-50 grayscale">
              {/* Fake Logos */}
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className={`h-8 bg-white/20 rounded ${i%2===0 ? 'w-24' : 'w-32'}`}></div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* SECTION 2: Problem Section */}
      <SectionWrapper variant="grid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Hidden Costs of Manual Operations</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">While your team sleeps, revenue slips through the cracks.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <GlassCard delay={0.1}>
            <div className="w-12 h-12 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Missed Leads</h3>
            <p className="text-gray-400">Prospects visit, don't convert, and disappear forever. We capture 40% more of your anonymous traffic.</p>
          </GlassCard>
          <GlassCard delay={0.2}>
            <div className="w-12 h-12 rounded-lg bg-orange-500/20 text-orange-500 flex items-center justify-center mb-4">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Slow Response Times</h3>
            <p className="text-gray-400">78% of customers buy from whoever responds first. ScorpioAI responds in &lt; 2 seconds.</p>
          </GlassCard>
          <GlassCard delay={0.3}>
            <div className="w-12 h-12 rounded-lg bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-4">
              <ShoppingCart size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Abandoned Carts</h3>
            <p className="text-gray-400">$4.6T in e-commerce revenue lost to cart abandonment yearly. We recover up to 34% automatically.</p>
          </GlassCard>
          <GlassCard delay={0.4}>
            <div className="w-12 h-12 rounded-lg bg-red-500/20 text-red-500 flex items-center justify-center mb-4">
              <TrendingUp size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Poor Follow-up</h3>
            <p className="text-gray-400">Manual follow-up is inconsistent and leaves money on the table. Our agents never forget to follow up.</p>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* SECTION 3: Platform Overview */}
      <SectionWrapper variant="gradient">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The ScorpioAI Platform</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A complete revenue operating system powered by intelligent agents.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 -z-10 transform -translate-y-1/2"></div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-background border border-primary/30 flex items-center justify-center text-3xl font-black text-primary mx-auto mb-6 glow-purple relative z-10">
              1
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Deploy AI Agents</h3>
            <p className="text-gray-400">Activate intelligent AI workers trained on your specific business data and brand voice.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-background border border-secondary/30 flex items-center justify-center text-3xl font-black text-secondary mx-auto mb-6 glow-blue relative z-10">
              2
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Automate Revenue Ops</h3>
            <p className="text-gray-400">Connect every touchpoint: lead capture, cart recovery, support, and post-purchase reviews.</p>
          </div>
          
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-background border border-primary/30 flex items-center justify-center text-3xl font-black text-primary mx-auto mb-6 glow-purple relative z-10">
              3
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Scale Without Limits</h3>
            <p className="text-gray-400">24/7 operation, zero overhead, infinite capacity. Your business grows automatically.</p>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 4: AI Agents Grid */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <Badge variant="blue" className="mb-4">12 Specialised Agents</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Your AI Team</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Hire the perfect agent for every stage of your customer journey.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {agents.map((agent, i) => (
            <GlassCard key={i} delay={i * 0.05} className="flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-white/5">{agent.icon}</div>
                <Badge variant="green" className="text-[10px] uppercase">Active</Badge>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-gray-400 mt-auto">{agent.desc}</p>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/ai-agents" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
            View all agent capabilities <ArrowDown className="-rotate-90 w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* SECTION 5: Interactive Workflow Animation */}
      <SectionWrapper variant="grid" className="py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">See How It Works</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A seamless, autonomous journey from visitor to loyal customer.</p>
        </div>
        
        <div className="max-w-5xl mx-auto relative glass-strong rounded-2xl p-8 md:p-12">
          {/* Animated SVG Diagram */}
          <div className="relative h-[200px] flex items-center justify-between w-full">
            {/* Dashed connector line */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] border-t-2 border-dashed border-primary/20 pointer-events-none" />
            {/* Animated traveling dot */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary pointer-events-none"
              style={{ boxShadow: '0 0 12px rgba(56,189,248,0.8)', left: 0 }}
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            />
            
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full glass border-primary/50 flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                <Users className="text-white" />
              </div>
              <span className="font-medium text-sm">Visitor</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                <Bot className="text-primary" />
              </div>
              <span className="font-medium text-sm">AI Lead Agent</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full glass border-primary/50 flex items-center justify-center mb-4 group-hover:glow-purple transition-all">
                <Target className="text-white" />
              </div>
              <span className="font-medium text-sm">Qualification</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full bg-secondary/20 border border-secondary flex items-center justify-center mb-4 group-hover:glow-blue transition-all">
                <RefreshCw className="text-secondary" />
              </div>
              <span className="font-medium text-sm">AI Follow-up</span>
            </div>
            
            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-16 h-16 rounded-full glass border-green-500/50 flex items-center justify-center mb-4 glow-purple transition-all">
                <CheckCircle2 className="text-green-400" />
              </div>
              <span className="font-medium text-sm">Conversion</span>
            </div>
          </div>
          
          <div className="mt-12 flex justify-center gap-4 border-t border-white/10 pt-8">
            <button className="px-6 py-2 rounded-full bg-white/10 text-white font-medium text-sm">E-commerce Flow</button>
            <button className="px-6 py-2 rounded-full text-gray-400 hover:bg-white/5 font-medium text-sm transition-colors">Service Business Flow</button>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 6: Use Cases */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GlassCard className="p-8" neonBorder>
            <Badge variant="purple" className="mb-6">E-commerce</Badge>
            <h3 className="text-3xl font-bold mb-4 text-white">Turn Browsers Into Buyers</h3>
            <p className="text-gray-400 mb-8">Deploy AI to capture pre-purchase intent, answer product questions, and autonomously recover abandoned carts with personalized incentives.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl font-bold text-primary"><AnimatedCounter value={340} suffix="%" /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Cart Recovery</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary"><AnimatedCounter value={67} suffix="%" /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Faster Resp.</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">$<AnimatedCounter value={127} /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Avg Recovered</div>
              </div>
            </div>
            
            {/* Fake Mock UI */}
            <div className="bg-background rounded-lg p-4 border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"><Bot size={16} className="text-primary" /></div>
                <div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-sm text-gray-300">
                  Hi there! I noticed you left the Pro Sneakers in your cart. Do you need help with sizing?
                </div>
              </div>
              <div className="flex items-center gap-3 justify-end">
                <div className="bg-primary p-3 rounded-lg rounded-tr-none text-sm text-white">
                  Yes, do they run small?
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs">U</div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[40px] -z-10 rounded-full mix-blend-screen"></div>
            </div>
          </GlassCard>
          
          <GlassCard className="p-8">
            <Badge variant="blue" className="mb-6">Service Businesses</Badge>
            <h3 className="text-3xl font-bold mb-4 text-white">Fill Your Calendar Automatically</h3>
            <p className="text-gray-400 mb-8">Stop missing leads from Facebook or Instagram. AI responds instantly, qualifies the prospect, and books the appointment directly on your calendar.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <div className="text-2xl font-bold text-secondary"><AnimatedCounter value={89} suffix="%" /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Lead Response</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary"><AnimatedCounter value={4.2} suffix="x" /></div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">More Bookings</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">24/7</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Availability</div>
              </div>
            </div>
            
            {/* Fake Mock UI */}
            <div className="bg-background rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
                <div className="text-sm font-medium">New Booking Confirmed</div>
                <Badge variant="green">Just now</Badge>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center">
                  <Clock className="text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Consultation Call</div>
                  <div className="text-xs text-gray-500">Tomorrow at 10:00 AM PST</div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* SECTION 7: Analytics Preview */}
      <SectionWrapper variant="gradient">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Real-Time Revenue Intelligence</h2>
            <p className="text-xl text-gray-400 mb-8">ScorpioAI doesn't just act; it measures everything. See exactly how much revenue your AI team is generating, recovering, and protecting in real-time.</p>
            
            <ul className="space-y-4">
              {['Track AI-attributed revenue down to the cent', 'Monitor conversation quality and sentiment', 'Identify high-converting AI prompts automatically'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary mt-1 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2">
            <GlassCard className="p-6">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-semibold text-white">Revenue Recovered</h4>
                <select className="bg-background border border-white/10 rounded px-2 py-1 text-sm text-gray-300">
                  <option>Last 30 Days</option>
                </select>
              </div>
              
              <div className="text-4xl font-black text-white mb-2 tracking-tight">
                $<AnimatedCounter value={2400000} prefix="" />
              </div>
              <div className="text-sm text-green-400 flex items-center gap-1 mb-8">
                <TrendingUp size={14} /> +24% from last month
              </div>
              
              {/* Fake Bar Chart */}
              <div className="h-48 flex items-end justify-between gap-2 border-b border-white/10 pb-2">
                {[40, 60, 45, 80, 55, 90, 100].map((h, i) => (
                  <div key={i} className="w-full relative group">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`w-full rounded-t-sm ${i === 6 ? 'bg-primary' : 'bg-white/10'} group-hover:bg-primary/80 transition-colors`}
                    ></motion.div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <span>Mon</span>
                <span>Sun</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </SectionWrapper>

      {/* SECTION 8: Integrations Preview */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Works With Your Stack</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">One-click integrations with the tools you already use.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto mb-12">
          {['Shopify', 'Stripe', 'Salesforce', 'HubSpot', 'WhatsApp', 'Instagram', 'WooCommerce', 'Zapier'].map((logo, i) => (
            <motion.div 
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="w-32 h-16 glass rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer font-semibold tracking-wide"
            >
              {logo}
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/integrations" className="inline-flex items-center gap-2 text-white font-medium hover:text-primary transition-colors border border-white/20 px-6 py-3 rounded-full hover:bg-white/5">
            View All Integrations <ArrowDown className="-rotate-90 w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>

      {/* SECTION 9: Pricing Preview */}
      <SectionWrapper variant="grid">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Scale your AI team without breaking the bank.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <GlassCard className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <div className="text-4xl font-black text-white mb-6">$99<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">Perfect for small businesses starting with AI automation.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['3 AI Agents', '1,000 conversations/mo', 'Basic Integrations'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="w-full py-3 rounded-lg border border-white/20 text-center text-white hover:bg-white/5 transition-colors">View Details</Link>
          </GlassCard>
          
          <GlassCard className="flex flex-col" neonBorder>
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">MOST POPULAR</div>
            <h3 className="text-xl font-bold text-white mb-2">Pro</h3>
            <div className="text-4xl font-black text-white mb-6">$199<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">For growing businesses that need full revenue ops automation.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['7 AI Agents', '5,000 conversations/mo', 'All Integrations', 'Advanced Analytics'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/book-demo" className="w-full py-3 rounded-lg bg-primary text-white text-center font-bold hover:scale-[1.02] transition-transform glow-purple">Get Started</Link>
          </GlassCard>
          
          <GlassCard className="flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
            <div className="text-4xl font-black text-white mb-6">$299<span className="text-lg text-gray-500 font-normal">/mo</span></div>
            <p className="text-gray-400 text-sm mb-6">Uncapped access to the entire ScorpioAI agent workforce.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['All 12 AI Agents', 'Unlimited conversations', 'Custom Workflows', 'Dedicated Support'].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 size={16} className="text-primary" /> {f}
                </li>
              ))}
            </ul>
            <Link href="/pricing" className="w-full py-3 rounded-lg border border-white/20 text-center text-white hover:bg-white/5 transition-colors">View Details</Link>
          </GlassCard>
        </div>
      </SectionWrapper>

      {/* SECTION 10: Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Forward-Thinking Businesses</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Don't just take our word for it.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Sarah Jenkins", role: "CMO, TechFlow", quote: "ScorpioAI recovered $42k in abandoned carts in our first month alone. It literally pays for itself 100x over." },
            { name: "David Chen", role: "Founder, Peak Services", quote: "We used to lose leads because we couldn't reply to Instagram DMs fast enough. Now the AI books them straight to my calendar." },
            { name: "Elena Rodriguez", role: "VP Sales, Nexus", quote: "It's like having a team of 50 SDRs working 24/7. The lead qualification accuracy is actually better than our human team." }
          ].map((t, i) => (
            <GlassCard key={i} className="p-8">
              <div className="flex text-yellow-500 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-300 mb-6 text-lg">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      {/* SECTION 11: FAQ */}
      <SectionWrapper variant="grid">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              { q: "How quickly can I set up ScorpioAI?", a: "You can be fully set up and running in under 15 minutes. Our onboarding process connects to your existing platforms instantly." },
              { q: "Do I need technical skills to use ScorpioAI?", a: "No. The platform is designed for business owners, not developers. If you can use a smartphone, you can deploy our AI agents." },
              { q: "Which platforms does ScorpioAI integrate with?", a: "We integrate with Shopify, WooCommerce, Stripe, Salesforce, HubSpot, WhatsApp, Instagram, Facebook Messenger, and thousands more via Zapier/n8n." },
              { q: "Is my data secure with ScorpioAI?", a: "Absolutely. We use enterprise-grade encryption, are SOC2 compliant, and never train our global models on your private customer data." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg text-white">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionWrapper>

      {/* SECTION 12: Final CTA */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">Ready to Deploy Your AI Revenue Team?</h2>
          <p className="text-2xl text-gray-300 mb-10 font-light">Join 500+ forward-thinking businesses automating their growth.</p>
          <div className="flex flex-col items-center gap-4">
            <Link href="/book-demo" className="px-10 py-5 rounded-full bg-white text-black font-black text-xl hover:scale-105 transition-transform shadow-[0_0_80px_rgba(255,255,255,0.3)]">
              Book Your Demo Now
            </Link>
            <span className="text-sm text-gray-400">No credit card required. Set up in minutes.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
