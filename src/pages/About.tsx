import React, { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { Shield, Zap, Heart, Globe, Target, Eye } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "ScorpioAI | About Us";
  }, []);

  const values = [
    { icon: <Zap />, title: "Velocity", desc: "We move fast because revenue doesn't wait. We ship updates weekly and respond to issues instantly." },
    { icon: <Shield />, title: "Trust & Security", desc: "Your data is yours. We build with enterprise-grade security and never train global models on private data." },
    { icon: <Heart />, title: "Obsessive Support", desc: "Our AI might be automated, but our team is deeply human. We obsess over our customers' success." },
    { icon: <Globe />, title: "Global Scale", desc: "We build for businesses of all sizes, everywhere. Our agents speak 50+ languages natively." }
  ];

  const team = [
    { name: "Marcus Thorne", role: "CEO & Co-founder", initials: "MT" },
    { name: "Elena Rodriguez", role: "CTO & Co-founder", initials: "ER" },
    { name: "David Chen", role: "Head of AI Research", initials: "DC" },
    { name: "Sarah Jenkins", role: "VP of Customer Success", initials: "SJ" },
    { name: "Alex Mercer", role: "Lead Product Designer", initials: "AM" },
    { name: "Priya Patel", role: "VP of Sales", initials: "PP" }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">We're Building the Future of Revenue Operations</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">ScorpioAI was created to help businesses move from manual sales operations to AI-powered revenue automation. Our mission is to give every business access to AI employees that can capture leads, qualify customers, support buyers, recover lost revenue, and grow sales around the clock.</p>
      </section>

      {/* Stats Bar */}
      <div className="container mx-auto px-4 mb-24 max-w-5xl">
        <div className="glass-strong rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
          <div>
            <div className="text-3xl font-black text-primary mb-1">2023</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Year Founded</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1"><AnimatedCounter value={500} suffix="+" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Businesses Served</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1">$<AnimatedCounter value={50} suffix="M+" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Revenue Automated</div>
          </div>
          <div>
            <div className="text-3xl font-black text-primary mb-1"><AnimatedCounter value={45} suffix="+" /></div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Team Members</div>
          </div>
        </div>
      </div>

      <SectionWrapper variant="grid" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          <GlassCard className="p-10" neonBorder>
            <Target className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">To democratize access to elite revenue operations. We believe a 2-person startup should have the same 24/7 sales coverage and operational efficiency as a Fortune 500 company.</p>
          </GlassCard>
          <GlassCard className="p-10">
            <Eye className="w-12 h-12 text-secondary mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">A world where humans do the creative, strategic thinking, and autonomous agents handle the repetitive execution. Work becomes more meaningful, and businesses grow effortlessly.</p>
          </GlassCard>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {values.map((v, i) => (
            <GlassCard key={i} className="p-8">
              <div className="w-12 h-12 rounded-lg bg-white/5 text-white flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{v.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the Team</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Built by operators who were tired of manual processes.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-center p-6 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg border border-white/20">
                {member.initials}
              </div>
              <h4 className="font-bold text-white">{member.name}</h4>
              <p className="text-sm text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
