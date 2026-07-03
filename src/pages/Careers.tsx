import React, { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/badge';
import { MapPin, Globe, Laptop, HeartPulse, GraduationCap, DollarSign, ArrowRight } from 'lucide-react';

export default function Careers() {
  useEffect(() => {
    document.title = "ScorpioAI | Careers";
  }, []);

  const jobs = [
    { title: "Senior AI Engineer", dept: "Engineering", loc: "San Francisco / Remote", type: "Full-time" },
    { title: "Full Stack Developer", dept: "Engineering", loc: "Remote (US/EU)", type: "Full-time" },
    { title: "Product Marketing Manager", dept: "Marketing", loc: "Remote", type: "Full-time" },
    { title: "Enterprise Account Executive", dept: "Sales", loc: "New York / Remote", type: "Full-time" },
    { title: "Customer Success Lead", dept: "Customer Success", loc: "Remote", type: "Full-time" },
    { title: "Prompt Engineer / Conversation Designer", dept: "Product", loc: "Remote", type: "Contract" }
  ];

  const perks = [
    { icon: <Globe />, title: "Remote-First", desc: "Work from anywhere in the world. We care about output, not hours spent in an office." },
    { icon: <DollarSign />, title: "Equity Package", desc: "Everyone gets a piece of the pie. We want you to act and feel like an owner." },
    { icon: <GraduationCap />, title: "Learning Budget", desc: "$2,000/year for courses, conferences, and books to keep your skills sharp." },
    { icon: <HeartPulse />, title: "Health & Wellness", desc: "Comprehensive health, dental, and vision insurance. Plus a $100/mo wellness stipend." }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Join the Future of AI</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">Help us build the autonomous workforce that will power the next generation of businesses.</p>
        <button className="px-8 py-4 rounded-lg bg-primary text-white font-bold hover:scale-105 transition-transform glow-purple inline-flex items-center gap-2">
          View Open Positions <ArrowRight size={20} />
        </button>
      </section>

      <SectionWrapper variant="grid" className="pt-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Life at ScorpioAI</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">We work hard, but we take care of our own.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-24">
          {perks.map((p, i) => (
            <GlassCard key={i} className="p-8">
              <div className="w-12 h-12 rounded-lg bg-white/10 text-white flex items-center justify-center mb-6">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>

        <div className="max-w-4xl mx-auto" id="open-positions">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Open Positions</h2>
            <Badge variant="blue">{jobs.length} Jobs Available</Badge>
          </div>
          
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <GlassCard key={i} className="p-6 flex flex-col md:flex-row md:items-center justify-between group hover:border-primary/50 transition-colors cursor-pointer" hoverGlow={false}>
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5"><Badge variant="default" className="text-xs bg-white/5">{job.dept}</Badge></span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><Laptop size={14} /> {job.type}</span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-lg border border-white/20 text-white font-medium group-hover:bg-primary group-hover:border-primary transition-colors md:shrink-0">
                  Apply Now
                </button>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-12 text-center bg-white/5 p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-2">Don't see a fit?</h3>
            <p className="text-gray-400 mb-6">We're always looking for exceptional talent. Send us your resume anyway.</p>
            <a href="mailto:careers@scorpioai.com" className="text-primary font-bold hover:text-white transition-colors">careers@scorpioai.com</a>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
