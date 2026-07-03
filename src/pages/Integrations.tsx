import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function Integrations() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = "ScorpioAI | Integrations";
  }, []);

  const integrations = [
    { name: "Shopify", cat: "E-commerce", color: "bg-green-500", status: "Connected" },
    { name: "WooCommerce", cat: "E-commerce", color: "bg-purple-600", status: "Available" },
    { name: "Stripe", cat: "Payments", color: "bg-indigo-500", status: "Available" },
    { name: "WhatsApp", cat: "Messaging", color: "bg-green-400", status: "Available" },
    { name: "Instagram", cat: "Messaging", color: "bg-pink-500", status: "Available" },
    { name: "Facebook Messenger", cat: "Messaging", color: "bg-blue-600", status: "Available" },
    { name: "Gmail", cat: "Messaging", color: "bg-red-500", status: "Available" },
    { name: "Outlook", cat: "Messaging", color: "bg-blue-500", status: "Available" },
    { name: "HubSpot", cat: "CRM", color: "bg-orange-500", status: "Available" },
    { name: "Salesforce", cat: "CRM", color: "bg-blue-400", status: "Available" },
    { name: "Google Calendar", cat: "Calendar", color: "bg-blue-500", status: "Available" },
    { name: "n8n", cat: "Automation", color: "bg-red-400", status: "Available" },
    { name: "Zapier", cat: "Automation", color: "bg-orange-400", status: "Available" }
  ];

  const categories = ['All', 'E-commerce', 'Payments', 'Messaging', 'CRM', 'Automation', 'Calendar'];
  
  const filtered = filter === 'All' ? integrations : integrations.filter(i => i.cat === filter);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Connects With<br/>Everything You Use</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">ScorpioAI slides right into your existing tech stack. No complex migrations or developer time required.</p>
      </section>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${filter === cat ? 'bg-primary text-white glow-purple' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <SectionWrapper variant="grid" className="pt-0">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filtered.map((item, i) => (
            <GlassCard key={i} className="flex flex-col items-center text-center p-6" delay={i * 0.05}>
              <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center text-white font-bold text-2xl mb-4 shadow-lg`}>
                {item.name.charAt(0)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.name}</h3>
              <Badge variant="default" className="mb-4">{item.cat}</Badge>
              <div className="mt-auto">
                <span className={`text-xs font-semibold uppercase tracking-wider ${item.status === 'Connected' ? 'text-green-400' : 'text-gray-500'}`}>
                  {item.status}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
        
        <div className="mt-20 text-center bg-white/5 border border-white/10 p-12 rounded-2xl max-w-4xl mx-auto backdrop-blur-md">
          <h3 className="text-2xl font-bold text-white mb-4">Don't see your tool?</h3>
          <p className="text-gray-400 mb-8">We integrate with over 1,000+ apps via webhooks and API. Let us know what you need.</p>
          <Link href="/contact" className="px-8 py-4 rounded-lg bg-white text-black font-bold hover:bg-gray-200 transition-colors">Request Integration</Link>
        </div>
      </SectionWrapper>
    </div>
  );
}
