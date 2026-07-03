import { useEffect, useState } from 'react';
import { type LucideIcon, Bot, Share2, MessageCircle, ShoppingBag, ShoppingCart, Headphones, RefreshCw, Star, Megaphone, BarChart2, Package, Target, ArrowRight } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';

interface Agent {
  id: number;
  category: string;
  Icon: LucideIcon;
  name: string;
  desc: string;
  how: string;
}

export default function AIAgents() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = "ScorpioAI | AI Agents";
  }, []);

  const agents: Agent[] = [
    { id: 1, category: "Sales", Icon: Bot, name: "AI Sales Agent", desc: "Qualifies leads and closes deals automatically.", how: "Analyzes incoming inquiries, asks qualifying questions based on your criteria, and pushes hot leads to checkout." },
    { id: 2, category: "Marketing", Icon: Share2, name: "AI Social Lead Gen", desc: "Finds and captures leads across social platforms.", how: "Monitors keywords on Twitter/LinkedIn, engages with relevant posts, and initiates DM conversations." },
    { id: 3, category: "Sales", Icon: MessageCircle, name: "AI DM Agent", desc: "Engages prospects in personalized direct conversations.", how: "Connects directly to your IG/FB inbox. Replies to stories and comments, guiding users to your funnel." },
    { id: 4, category: "Sales", Icon: ShoppingBag, name: "AI Product Recommendation", desc: "Suggests the right products to the right buyers.", how: "Analyzes browsing behavior to recommend upsells dynamically during the chat or checkout process." },
    { id: 5, category: "Sales", Icon: ShoppingCart, name: "AI Cart Recovery", desc: "Recovers abandoned carts with smart follow-ups.", how: "Detects abandonment, waits for optimal timing, and reaches out via WhatsApp/SMS with a custom incentive." },
    { id: 6, category: "Support", Icon: Headphones, name: "AI Customer Support", desc: "Resolves support tickets instantly, 24/7.", how: "Connects to your knowledge base to answer FAQ, track orders, and process basic returns without human input." },
    { id: 7, category: "Sales", Icon: RefreshCw, name: "AI Follow-up Agent", desc: "Never lets a lead go cold.", how: "Schedules intelligent multi-touch point sequences over weeks or months until the prospect replies." },
    { id: 8, category: "Marketing", Icon: Star, name: "AI Review Agent", desc: "Collects and responds to customer reviews automatically.", how: "Reaches out post-purchase to solicit reviews. Intercepts negative feedback and pushes positive ones to public sites." },
    { id: 9, category: "Marketing", Icon: Megaphone, name: "AI Marketing Agent", desc: "Generates marketing content at scale.", how: "Creates blog posts, email newsletters, and ad copy optimized for your brand voice." },
    { id: 10, category: "Analytics", Icon: BarChart2, name: "AI Analytics Agent", desc: "Surfaces insights in real-time.", how: "Constantly queries your database to find anomalies, revenue drops, or high-performing cohorts." },
    { id: 11, category: "Support", Icon: Package, name: "AI Inventory Agent", desc: "Monitors stock levels.", how: "Alerts you when inventory is low and automatically adjusts ad spend for out-of-stock items." },
    { id: 12, category: "Analytics", Icon: Target, name: "AI Competitor Intel", desc: "Tracks competitor positioning.", how: "Scrapes competitor pricing and feature updates, alerting your team of major shifts." }
  ];

  const filteredAgents = filter === 'All' ? agents : agents.filter(a => a.category === filter);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Your AI Workforce,<br/>Ready to Deploy</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">Mix and match specialized AI agents to build the ultimate revenue engine. They never sleep, never ask for a raise, and work flawlessly together.</p>
      </section>

      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-wrap justify-center gap-3">
          {['All', 'Sales', 'Marketing', 'Support', 'Analytics'].map(cat => (
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

      <SectionWrapper variant="default" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent, i) => (
            <GlassCard key={agent.id} className="flex flex-col h-full group" delay={i * 0.05}>
              <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <agent.Icon size={28} />
                </div>
                <Badge variant="green" className="text-xs">Available</Badge>
              </div>
              <Badge variant="default" className="w-fit mb-3">{agent.category}</Badge>
              <h3 className="text-2xl font-bold text-white mb-3">{agent.name}</h3>
              <p className="text-gray-300 mb-6 text-base">{agent.desc}</p>
              
              <div className="bg-black/30 p-4 rounded-lg border border-white/5 mb-6 mt-auto">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-bold">How it works</div>
                <p className="text-sm text-gray-400 leading-relaxed">{agent.how}</p>
              </div>
              
              <button className="w-full py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary hover:text-white transition-colors font-semibold flex justify-center items-center gap-2">
                Deploy Agent <ArrowRight size={16} />
              </button>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
