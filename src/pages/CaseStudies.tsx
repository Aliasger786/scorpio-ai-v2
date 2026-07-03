import React, { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CaseStudies() {
  useEffect(() => {
    document.title = "ScorpioAI | Case Studies";
  }, []);

  const cases = [
    {
      company: "Aura Skincare",
      industry: "E-commerce",
      challenge: "Aura was losing $80k/month to abandoned carts and struggling to manage 500+ DMs per day on Instagram.",
      solution: "Deployed AI Cart Recovery via WhatsApp and AI DM Agent to instantly answer product questions.",
      metrics: [
        { label: "Recovered Revenue", value: 34, suffix: "k", prefix: "$" },
        { label: "DM Resp. Time", value: 1.2, suffix: "s" },
        { label: "ROAS Increase", value: 42, suffix: "%" }
      ]
    },
    {
      company: "Elite Roofing",
      industry: "Local Service",
      challenge: "Missing out on local leads who requested quotes outside of business hours (which was 40% of their traffic).",
      solution: "Implemented AI Lead Agent on their website and Google Business Profile to qualify leads and book estimates 24/7.",
      metrics: [
        { label: "More Bookings", value: 3, suffix: "x" },
        { label: "Lead Capture", value: 89, suffix: "%" },
        { label: "Added Revenue", value: 120, suffix: "k", prefix: "$" }
      ]
    },
    {
      company: "SaaSify Hub",
      industry: "B2B SaaS",
      challenge: "SDRs were spending 80% of their time answering basic questions instead of closing enterprise deals.",
      solution: "Added AI Sales Agent to the pricing page to handle tier comparisons and only route qualified enterprise leads to humans.",
      metrics: [
        { label: "SDR Time Saved", value: 30, suffix: "hrs/wk" },
        { label: "Demo Bookings", value: 55, suffix: "%" },
        { label: "Deal Velocity", value: 2, suffix: "x" }
      ]
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Real Results From<br/>Real Businesses</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">See how companies use ScorpioAI to transform their revenue operations from a manual bottleneck into an automated growth engine.</p>
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 mb-20 max-w-5xl">
        <div className="glass-strong rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <div className="text-3xl font-black text-primary mb-1"><AnimatedCounter value={500} suffix="+" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Businesses</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1">$<AnimatedCounter value={50} suffix="M+" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Recovered</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1"><AnimatedCounter value={99.9} suffix="%" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1"><AnimatedCounter value={4.9} suffix="/5" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Rating</div>
          </div>
        </div>
      </div>

      <SectionWrapper variant="default" className="pt-0">
        <div className="space-y-12 max-w-5xl mx-auto">
          {cases.map((c, i) => (
            <GlassCard key={i} className="p-8 md:p-10" delay={i * 0.1}>
              <div className="flex flex-col md:flex-row gap-10">
                <div className="w-full md:w-1/3 border-r border-white/10 pr-8">
                  <Badge variant="blue" className="mb-4">{c.industry}</Badge>
                  <h3 className="text-3xl font-bold text-white mb-2">{c.company}</h3>
                  
                  <div className="space-y-6 mt-8">
                    {c.metrics.map((m, j) => (
                      <div key={j}>
                        <div className="text-3xl font-black text-primary">{m.prefix}<AnimatedCounter value={m.value} suffix={m.suffix} /></div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-bold">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 flex flex-col justify-center">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">The Challenge</h4>
                    <p className="text-gray-400 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2 text-primary">The ScorpioAI Solution</h4>
                    <p className="text-gray-400 leading-relaxed">{c.solution}</p>
                  </div>
                  
                  <button className="self-start text-white hover:text-primary font-bold flex items-center gap-2 transition-colors">
                    Read Full Story <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
