import React, { useEffect, useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function Blog() {
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    document.title = "ScorpioAI | Insights";
  }, []);

  const posts = [
    {
      title: "The Death of the SDR: How AI is Reshaping B2B Sales",
      excerpt: "Why the traditional model of hiring dozens of reps to send cold emails is economically broken, and how autonomous agents are taking over.",
      cat: "AI & Automation",
      date: "Oct 12, 2023",
      author: "Alex Mercer",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Recovering $4.6T: The AI Approach to Abandoned Carts",
      excerpt: "Stop sending generic 'You left this behind' emails. Learn how personalized, conversational WhatsApp recovery outperforms email by 300%.",
      cat: "E-commerce",
      date: "Oct 05, 2023",
      author: "Sarah Jenkins",
      color: "from-blue-400 to-cyan-600"
    },
    {
      title: "Response Time is Revenue: The 2-Second Rule",
      excerpt: "Data from 50,000 interactions shows that responding to a lead within 2 seconds instead of 5 minutes increases conversion odds by 78%.",
      cat: "Sales Strategy",
      date: "Sep 28, 2023",
      author: "Marcus Thorne",
      color: "from-emerald-400 to-teal-600"
    },
    {
      title: "Introducing Scorpio V2: Memory & Context Engine",
      excerpt: "Our agents now remember previous interactions across platforms, creating a truly unified experience for your customers.",
      cat: "Product Updates",
      date: "Sep 15, 2023",
      author: "Product Team",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "How to Train Your AI Agent in 15 Minutes",
      excerpt: "A step-by-step guide to uploading your knowledge base and setting guardrails so your agent sounds exactly like your best employee.",
      cat: "AI & Automation",
      date: "Sep 02, 2023",
      author: "Alex Mercer",
      color: "from-pink-500 to-rose-600"
    },
    {
      title: "Omnichannel Support is Dead. Conversational Commerce is Here.",
      excerpt: "Why customers hate ticketing systems and how AI allows you to resolve issues inside the DM without ever opening a support portal.",
      cat: "E-commerce",
      date: "Aug 20, 2023",
      author: "Sarah Jenkins",
      color: "from-indigo-400 to-purple-600"
    }
  ];

  const categories = ['All', 'AI & Automation', 'E-commerce', 'Sales Strategy', 'Product Updates'];
  const filtered = filter === 'All' ? posts : posts.filter(p => p.cat === filter);

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">ScorpioAI Insights</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">Strategies, data, and updates on the future of autonomous revenue operations.</p>
      </section>

      <div className="container mx-auto px-4 mb-12 max-w-6xl">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all ${filter === cat ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <SectionWrapper variant="default" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filtered.map((post, i) => (
            <GlassCard key={i} className="flex flex-col p-0 overflow-hidden group cursor-pointer" delay={i * 0.1}>
              <div className={`h-48 w-full bg-gradient-to-br ${post.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <div className="p-6 flex flex-col flex-1">
                <Badge variant="default" className="w-fit mb-4">{post.cat}</Badge>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-white/10">
                  <span className="font-semibold text-gray-300">{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
